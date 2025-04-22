
import { Heart, Hospital, ShieldCheck, Wallet } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Navigation menu items
const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: Heart,
  },
  {
    title: "My Records",
    path: "/records",
    icon: Hospital,
  },
  {
    title: "Access Control",
    path: "/access",
    icon: ShieldCheck,
  },
  {
    title: "Payment",
    path: "/payment",
    icon: Wallet,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex items-center justify-between">
        <div className="flex items-center space-x-2 px-4">
          <Heart className="h-6 w-6 text-sidebar-primary" />
          <span className="font-bold text-lg">Health-Chain</span>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        cn(isActive && "data-[active=true]")
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-xs text-sidebar-foreground/50 p-4">
        Health-Chain Nexus v1.0
      </SidebarFooter>
    </Sidebar>
  );
}
