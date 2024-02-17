import type { Project, User } from '@elek-io/shared';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { useState, type ReactNode } from 'react';
import { Header, type UserNavigationItemGroup } from '../components/Header.tsx';
import type { NotificationProps } from '../components/Notification.tsx';
import { NotificationContainer } from '../components/NotificationContainer.tsx';
import {
  Sidebar,
  type SidebarNavigationItemGroup,
} from '../components/Sidebar.tsx';

const styles = cva('');

export interface BaseLayoutProps extends VariantProps<typeof styles> {
  children: ReactNode;
  currentUser: User;
  currentPath: string;
  currentProject: Project | undefined;
  sidebarNavigation: SidebarNavigationItemGroup[];
  sidebarDisabledOnPaths: string[];
  userNavigation: UserNavigationItemGroup[];
  notifications: NotificationProps[];
  searchQuery: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export function BaseLayout(props: BaseLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full w-full">
      <Sidebar
        currentPath={props.currentPath}
        currentProject={props.currentProject}
        isOpen={isSidebarOpen}
        setOpen={setSidebarOpen}
        disabledOnPaths={props.sidebarDisabledOnPaths}
        navigation={props.sidebarNavigation}
      ></Sidebar>

      <div className="flex flex-1 flex-col overflow-hidden lg:flex-col-reverse">
        <div className="flex flex-1 items-stretch overflow-hidden">
          {props.children}
        </div>

        <Header
          currentUser={props.currentUser}
          currentPath={props.currentPath}
          setSidebarOpen={setSidebarOpen}
          sidebarDisabledOnPaths={props.sidebarDisabledOnPaths}
          userNavigation={props.userNavigation}
          notifications={props.notifications}
          searchQuery={props.searchQuery}
          onSearch={props.onSearch}
        ></Header>
      </div>

      <NotificationContainer
        notifications={props.notifications}
      ></NotificationContainer>
    </div>
  );
}
