"use client"
import { Home, Receipt, Tag, PenLine, Plug, MailX, Inbox, MessageSquareDashed, AlertCircle } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Billing", url: "/billing", icon: Receipt },
  { title: "Labels", url: "/settings/labels", icon: Tag },
  { title: "Draft preference", url: "/settings/draft-preference", icon: PenLine },
  { title: "Integrations", url: "/integrations", icon: Plug },
]

const cleanupItems = [
  { title: "Unsubscribe", url: "/unsubscribe", icon: MailX },
  { title: "Large emails", url: "/storage", icon: Inbox },
]

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar()
  const pathname = usePathname()

  const handleLinkClick = () => {
    if (isMobile) setOpenMobile(false)
  }

  const renderItems = (items: typeof cleanupItems) =>
    items.map((item) => {
      const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url))
      const Icon = item.icon
      return (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={isActive}
            className="group/menu-button relative before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2.5px] before:rounded-r-full before:bg-indigo-500 data-[active=true]:before:block before:hidden"
          >
            <Link href={item.url} onClick={handleLinkClick}>
              <Icon size={16} className="shrink-0 opacity-70 group-data-[active=true]/menu-button:opacity-100 group-hover:opacity-100" aria-hidden="true" />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )
    })

  return (
    <Sidebar>
      <SidebarContent className="lg:mt-16 overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel />
          <SidebarGroupContent>
            <SidebarMenu>
              {renderItems(items)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10.5px] font-medium tracking-widest uppercase text-sidebar-foreground/50 pb-1">
            Cleanup
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {renderItems(cleanupItems)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="https://forms.baytix.net/forms/neatmail-feedback-form-8fc4565d"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <MessageSquareDashed size={16} className="shrink-0 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                <span>Feedback</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="text-red-600 hover:text-red-700">
              <Link href="/danger" onClick={handleLinkClick}>
                <AlertCircle size={16} className="shrink-0 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                <span>Danger Zone</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}