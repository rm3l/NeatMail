# Graph Report - neatmail  (2026-05-10)

## Corpus Check
- 220 files · ~186,521 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2298 nodes · 3233 edges · 57 communities (52 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4386f28d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 54|Community 54]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 115 edges
2. `client` - 46 edges
3. `Button()` - 24 edges
4. `getGraphClient()` - 19 edges
5. `useGetUserSubscribed()` - 15 edges
6. `getGmailClient()` - 15 edges
7. `UserLabelSettings()` - 10 edges
8. `Input()` - 10 edges
9. `Skeleton()` - 9 edges
10. `inngest` - 9 edges

## Surprising Connections (you probably didn't know these)
- `AddDropdown()` --calls--> `useGetUserSubscribed()`  [EXTRACTED]
  components/AddDropdown.tsx → features/user/use-get-subscribed.ts
- `AlertDialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `SelectLabel()` --calls--> `cn()`  [EXTRACTED]
  components/ui/select.tsx → lib/utils.ts
- `SelectSeparator()` --calls--> `cn()`  [EXTRACTED]
  components/ui/select.tsx → lib/utils.ts

## Communities (57 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (196): AggregateUser_tokens, BoolFieldUpdateOperationsInput, DateTimeFieldUpdateOperationsInput, GetUser_tokensAggregateType, GetUser_tokensGroupByPayload, NullableDateTimeFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput, Prisma__user_tokensClient (+188 more)

### Community 1 - "Community 1"
Cohesion: 0.02
Nodes (120): AllowedTokenScalarFieldEnum, ArchiveRuleScalarFieldEnum, Args, At, AtLeast, AtLoose, AtStrict, BatchPayload (+112 more)

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (115): AggregateTag, GetTagAggregateType, GetTagGroupByPayload, Prisma__tagClient, tag$email_trackedArgs, tag$integration_rulesArgs, tag$user_tagsArgs, tag$user_tokensArgs (+107 more)

### Community 3 - "Community 3"
Cohesion: 0.02
Nodes (113): AggregatePaymentHistory, GetPaymentHistoryAggregateType, GetPaymentHistoryGroupByPayload, NullableIntFieldUpdateOperationsInput, PaymentHistory$refundsArgs, PaymentHistory$subscriptionArgs, PaymentHistoryAggregateArgs, PaymentHistoryAvgAggregateInputType (+105 more)

### Community 4 - "Community 4"
Cohesion: 0.02
Nodes (97): AggregateSubscription, GetSubscriptionAggregateType, GetSubscriptionGroupByPayload, IntFieldUpdateOperationsInput, Prisma__SubscriptionClient, Subscription$paymentsArgs, SubscriptionAggregateArgs, SubscriptionAvgAggregateInputType (+89 more)

### Community 5 - "Community 5"
Cohesion: 0.02
Nodes (96): AggregateRefund, GetRefundAggregateType, GetRefundGroupByPayload, Prisma__RefundClient, RefundAggregateArgs, RefundAvgAggregateInputType, RefundAvgAggregateOutputType, RefundAvgOrderByAggregateInput (+88 more)

### Community 6 - "Community 6"
Cohesion: 0.02
Nodes (92): AggregateEmail_tracked, email_tracked$tagArgs, Email_trackedAggregateArgs, Email_trackedCountAggregateInputType, Email_trackedCountAggregateOutputType, email_trackedCountArgs, email_trackedCountOrderByAggregateInput, email_trackedCreateArgs (+84 more)

### Community 7 - "Community 7"
Cohesion: 0.02
Nodes (91): AggregateUser_tags, GetUser_tagsAggregateType, GetUser_tagsGroupByPayload, Prisma__user_tagsClient, User_tagsAggregateArgs, User_tagsCountAggregateInputType, User_tagsCountAggregateOutputType, user_tagsCountArgs (+83 more)

### Community 8 - "Community 8"
Cohesion: 0.02
Nodes (91): AggregateIntegrationRules, GetIntegrationRulesAggregateType, GetIntegrationRulesGroupByPayload, IntegrationRulesAggregateArgs, IntegrationRulesCountAggregateInputType, IntegrationRulesCountAggregateOutputType, integrationRulesCountArgs, integrationRulesCountOrderByAggregateInput (+83 more)

### Community 9 - "Community 9"
Cohesion: 0.02
Nodes (84): AggregateTelegramPendingDraft, GetTelegramPendingDraftAggregateType, GetTelegramPendingDraftGroupByPayload, Prisma__telegramPendingDraftClient, StringNullableListFilter, TelegramPendingDraftAggregateArgs, TelegramPendingDraftAvgAggregateInputType, TelegramPendingDraftAvgAggregateOutputType (+76 more)

### Community 10 - "Community 10"
Cohesion: 0.02
Nodes (82): AggregateArchiveRule, ArchiveRuleAggregateArgs, ArchiveRuleAvgAggregateInputType, ArchiveRuleAvgAggregateOutputType, ArchiveRuleAvgOrderByAggregateInput, ArchiveRuleCountAggregateInputType, ArchiveRuleCountAggregateOutputType, ArchiveRuleCountArgs (+74 more)

### Community 11 - "Community 11"
Cohesion: 0.03
Nodes (75): AggregateDraft_preference, Draft_preferenceAggregateArgs, Draft_preferenceAvgAggregateInputType, Draft_preferenceAvgAggregateOutputType, draft_preferenceAvgOrderByAggregateInput, Draft_preferenceCountAggregateInputType, Draft_preferenceCountAggregateOutputType, draft_preferenceCountArgs (+67 more)

### Community 12 - "Community 12"
Cohesion: 0.03
Nodes (70): AggregateFree_trial, Enumtrial_statusFieldUpdateOperationsInput, Free_trialAggregateArgs, Free_trialCountAggregateInputType, Free_trialCountAggregateOutputType, free_trialCountArgs, free_trialCountOrderByAggregateInput, free_trialCreateArgs (+62 more)

### Community 13 - "Community 13"
Cohesion: 0.03
Nodes (69): AggregateTelegramIntegration, GetTelegramIntegrationAggregateType, GetTelegramIntegrationGroupByPayload, Prisma__TelegramIntegrationClient, TelegramIntegrationAggregateArgs, TelegramIntegrationCountAggregateInputType, TelegramIntegrationCountAggregateOutputType, TelegramIntegrationCountArgs (+61 more)

### Community 14 - "Community 14"
Cohesion: 0.04
Nodes (54): AggregateAllowedToken, AllowedTokenAggregateArgs, AllowedTokenCountAggregateInputType, AllowedTokenCountAggregateOutputType, allowedTokenCountArgs, allowedTokenCountOrderByAggregateInput, allowedTokenCreateArgs, allowedTokenCreateInput (+46 more)

### Community 15 - "Community 15"
Cohesion: 0.04
Nodes (49): BoolFilter, BoolWithAggregatesFilter, DateTimeFilter, DateTimeNullableFilter, DateTimeNullableWithAggregatesFilter, DateTimeWithAggregatesFilter, Enumtrial_statusFilter, Enumtrial_statusWithAggregatesFilter (+41 more)

### Community 16 - "Community 16"
Cohesion: 0.07
Nodes (20): Dashboard(), subtitles, DatePickerWithRange(), LabelDistribution(), Clutter(), DAYS, HeatMap(), HOURS (+12 more)

### Community 17 - "Community 17"
Cohesion: 0.09
Nodes (24): cn(), Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, DropdownMenuCheckboxItem() (+16 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (34): cleanupItems, items, useIsMobile(), Sidebar(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter() (+26 more)

### Community 19 - "Community 19"
Cohesion: 0.07
Nodes (26): colors, outlook_colors, adapter, globalForPrisma, apiLimiter, CustomRateLimit, getIdentifier(), gmailWebhookLimiter (+18 more)

### Community 20 - "Community 20"
Cohesion: 0.05
Nodes (36): AllowedTokenScalarFieldEnum, ArchiveRuleScalarFieldEnum, Draft_preferenceScalarFieldEnum, Email_trackedScalarFieldEnum, Free_trialScalarFieldEnum, IntegrationRulesScalarFieldEnum, JsonNullValueFilter, ModelName (+28 more)

### Community 21 - "Community 21"
Cohesion: 0.11
Nodes (20): ContextAssembler, openai, buildContextAndDraft(), openai, ContextCard, ContextProvider, EmailEntities, EmailIntent (+12 more)

### Community 22 - "Community 22"
Cohesion: 0.11
Nodes (21): CreateLabel(), CreateLabelInterface, formSchema, RESERVED_KEYWORDS, SENSITIVITY_OPTIONS, useGetUserDraftPreference(), formSchema, FormValues (+13 more)

### Community 23 - "Community 23"
Cohesion: 0.09
Nodes (22): EmailCategorizationModal(), EmailCategorizationModalProps, Confetti, OnboardingSuccessDialogProps, UpdateFolderPrefernce(), UserDraftPreference(), RequestType, ResponseType (+14 more)

### Community 24 - "Community 24"
Cohesion: 0.1
Nodes (23): ActionsCell(), clampPercentage(), EmailStats(), EmailStatsRow, formatPercentage(), getReadPercentage(), getUnreadPercentage(), ProgressBar() (+15 more)

### Community 25 - "Community 25"
Cohesion: 0.11
Nodes (22): AddDropdown(), UserLabelSettings(), RequestType, ResponseType, useDeleteTag(), AlertDialog(), AlertDialogAction(), AlertDialogCancel() (+14 more)

### Community 26 - "Community 26"
Cohesion: 0.1
Nodes (23): activateWatch(), deactivateWatch(), addPaymenttoDb(), addRefundtoDb(), addSubscriptiontoDb(), handleWatchActivation(), handleWatchDeactivation(), isDodoWebhookProcessed() (+15 more)

### Community 27 - "Community 27"
Cohesion: 0.13
Nodes (24): Attachment, handleLabelCorrections(), createGmailDraft(), decodeGmailBase64Url(), deleteGmailDraft(), downloadAttachment(), extractBodyFromPart(), getAttachment() (+16 more)

### Community 28 - "Community 28"
Cohesion: 0.14
Nodes (18): LabelsNotInGmail(), PermissionsModal(), PermissionsModalProps, SubscriptionModal(), SubscriptionModalProps, steps, addCustomTags(), RequestType (+10 more)

### Community 29 - "Community 29"
Cohesion: 0.12
Nodes (12): CanTakeFreeTrial(), client, Rules(), useGetTelegramPreferences(), useGetTelegramRules(), RequestType, ResponseType, usePostTelegramPreferences() (+4 more)

### Community 30 - "Community 30"
Cohesion: 0.15
Nodes (20): handleTelegramQueryGmail(), openai, TOOLS, downloadOutlookAttachment(), handleTelegramQueryOutlook(), listOutlookAttachments(), openai, searchOutlook() (+12 more)

### Community 31 - "Community 31"
Cohesion: 0.1
Nodes (13): EmptyState(), EmptyStateProps, ErrorState(), ErrorStateProps, EmailRow, StorageAnalysis(), EmailRow, useGetFilteredEmails() (+5 more)

### Community 32 - "Community 32"
Cohesion: 0.17
Nodes (21): archiveMessagesOutlook(), createOutlookDraft(), createOutlookSubscription(), deleteOutlookMessage(), deleteOutlookSubscription(), deleteOutlookTag(), GetFilteredMailsFilters, getFilteredMailsOutlook() (+13 more)

### Community 33 - "Community 33"
Cohesion: 0.16
Nodes (18): getModelResponse(), isMessageProcessed(), markMessageProcessed(), addMailtoDB(), getLastHistoryId(), getTagsUser(), getUserByEmail(), getUserSubscribed() (+10 more)

### Community 34 - "Community 34"
Cohesion: 0.12
Nodes (17): processDraftGmail, processOutlookMailFn, processTelegramQueryFn, updateOutlookMailFn, { GET, POST, PUT }, inngest, API_CONFIG, apiClient (+9 more)

### Community 35 - "Community 35"
Cohesion: 0.16
Nodes (11): Billing(), CATEGORIES, Navbar(), Props, TrackedEmail(), UserLabel(), useGetUserEmails(), useGetCustomTags() (+3 more)

### Community 36 - "Community 36"
Cohesion: 0.1
Nodes (20): 🏗️ Architecture, code:bash (git clone https://github.com/Lakshay1509/NeatMail.git), code:bash (bun install), code:bash (cp .env.example .env.local), code:bash (bunx prisma db push), code:bash (bun run dev), code:mermaid (graph TD), 🔧 Configuration (+12 more)

### Community 37 - "Community 37"
Cohesion: 0.15
Nodes (10): deleteUnauthorizedUser(), geistMono, geistSans, metadata, AccessDeniedAlert(), AppSidebar(), ConditionalSidebar(), getQueryClient() (+2 more)

### Community 38 - "Community 38"
Cohesion: 0.12
Nodes (15): allowedToken, ArchiveRule, draft_preference, email_tracked, free_trial, integrationRules, PaymentHistory, PrismaClient (+7 more)

### Community 39 - "Community 39"
Cohesion: 0.14
Nodes (12): BetaAccessEmailProps, bullet, button, buttonSection, container, hr, link, main (+4 more)

### Community 40 - "Community 40"
Cohesion: 0.23
Nodes (7): DeleteUser(), useGetUserDeleteStatus(), ResponseType, useDeleteUser(), deleteWatch(), RequestType, ResponseType

### Community 41 - "Community 41"
Cohesion: 0.21
Nodes (9): DatePickerWithRangeProps, Calendar(), CalendarDayButton(), Popover(), PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle() (+1 more)

### Community 42 - "Community 42"
Cohesion: 0.29
Nodes (5): UserPrivacySettings(), useGetUserPrivacy(), RequestType, ResponseType, useUpdatePrivacy()

### Community 43 - "Community 43"
Cohesion: 0.2
Nodes (9): Agent Guide — NeatMail, Architecture, Build & Dev, Code Conventions, Env Setup, graphify, Important Constraints, Prisma (+1 more)

### Community 44 - "Community 44"
Cohesion: 0.36
Nodes (7): decryptDomain(), encryptDomain(), getKey(), init(), app, dateQuerySchema, TrafficData

### Community 45 - "Community 45"
Cohesion: 0.43
Nodes (5): checkInviteToken(), checkUserEmail(), SignInPage(), SignInOrInvite(), SignInOrInviteProps

### Community 46 - "Community 46"
Cohesion: 0.29
Nodes (4): config, LogOptions, PrismaClient, PrismaClientConstructor

### Community 48 - "Community 48"
Cohesion: 0.4
Nodes (4): logger, config, isPublicApiRoute, isPublicRoute

### Community 49 - "Community 49"
Cohesion: 0.5
Nodes (3): Instructions, neatmail, When to use

## Knowledge Gaps
- **1719 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `isPublicRoute`, `isPublicApiRoute` (+1714 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 17` to `Community 41`, `Community 16`, `Community 18`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 28`, `Community 31`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `Button()` connect `Community 25` to `Community 35`, `Community 40`, `Community 41`, `Community 42`, `Community 45`, `Community 47`, `Community 17`, `Community 18`, `Community 22`, `Community 23`, `Community 24`, `Community 28`, `Community 29`, `Community 31`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `SidebarProvider()` connect `Community 18` to `Community 17`, `Community 37`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _1719 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.01 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._