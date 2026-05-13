import { clerkClient } from "@clerk/nextjs/server"
import {
  ContextProvider,
  ContextCard,
  EmailEntities,
  EmailIntent,
  IncomingEmail,
} from "../types"

const SLACK_API = "https://slack.com/api"

interface SlackMessage {
  text: string
  user: string
  username: string
  channel: { name: string }
  ts: string
  permalink: string
}

interface SlackSearchResponse {
  ok: boolean
  error?: string
  messages?: {
    matches: SlackMessage[]
    total: number
  }
}

export class SlackProvider implements ContextProvider {
  id = "slack"
  name = "Slack"

  relevantIntents: EmailIntent[] = [
    "question",
    "task_assignment",
    "follow_up",
    "status_update",
    "approval",
    "complaint",
    "general",
  ]

  async fetchContext(
    email: IncomingEmail,
    entities: EmailEntities,
    userId: string
  ): Promise<ContextCard | null> {
    let token: string
    try {
      const client = await clerkClient()
      const tokenResponse = await client.users.getUserOauthAccessToken(
        userId,
        "slack"
      )
      token = tokenResponse.data[0]?.token
      if (!token) return null
    } catch {
      return null
    }

    const query = this.buildQuery(email, entities)

    try {
      const searchUrl = new URL(`${SLACK_API}/search.messages`)
      searchUrl.searchParams.set("query", query)
      searchUrl.searchParams.set("count", "5")
      searchUrl.searchParams.set("sort", "timestamp")

      const res = await fetch(searchUrl.toString(), {
        headers: { Authorization: `Bearer ${token}` },
      })

      const data: SlackSearchResponse = await res.json()

      // TODO: remove after debugging
      console.log(`[SlackProvider] query="${query}" total=${data.messages?.total ?? 0} matches=${data.messages?.matches?.length ?? 0}`)

      if (!data.ok || !data.messages?.matches?.length) return null

      const summaryLines = data.messages.matches.slice(0, 5).map((m) => {
        const cleanText = m.text
          .replace(/<[^>]+>/g, "")
          .replace(/\n+/g, " ")
          .trim()
          .slice(0, 200)
        const channel = m.channel?.name ?? "unknown"
        const user = m.username || m.user
        return `- #${channel} | ${user}: ${cleanText}`
      })

      const summary = `Relevant Slack messages (${data.messages.total} total matches):\n${summaryLines.join("\n")}`
      // TODO: remove after debugging
      console.log(`[SlackProvider] context:\n${summary}`)

      return {
        providerId: this.id,
        providerName: this.name,
        relevance: "medium",
        summary,
        data: data.messages.matches.slice(0, 5),
      }
    } catch (err) {
      console.error("[SlackProvider] search failed:", err)
      return null
    }
  }

  private buildQuery(email: IncomingEmail, entities: EmailEntities): string {
    const parts: string[] = []

    if (email.senderName) {
      parts.push(`"${email.senderName}"`)
    }

    const emailLocal = email.senderEmail.split("@")[0]
    if (emailLocal && emailLocal !== email.senderName) {
      parts.push(emailLocal)
    }

    const domain = email.senderEmail.split("@")[1]
    if (domain) {
      parts.push(domain)
    }

    const keywords = entities.keywords.slice(0, 5)
    if (keywords.length > 0) {
      parts.push(keywords.join(" "))
    }

    return parts.join(" ")
  }
}
