import { clerkClient } from "@clerk/nextjs/server"

export async function getUserConnectedProviders(userId: string): Promise<string[]> {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  return user.externalAccounts.map((acc) => acc.provider.replace("oauth_", ""))
}
