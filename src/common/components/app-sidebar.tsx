'use client';

import * as React from 'react';
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconKey,
  IconKeyOff,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';

import { NavMain } from '@/common/components/nav-main';
import { NavSecondary } from '@/common/components/nav-secondary';
import { NavUser } from '@/common/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/common/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';

const data = {
  user: {
    name: 'Jeff',
    email: 'jeff@test.com',
    avatar: '/avatar.png',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconDashboard,
    },
    {
      title: 'Tokens',
      url: '#',
      icon: IconKey,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Objective Labs"
                  className="object-contain"
                  priority
                  width={172}
                  height={32}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
