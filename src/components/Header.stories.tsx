import type { User } from '@elek-io/shared';
import type { Meta, StoryObj } from '@storybook/react';
import { Header, userNavigationExample } from './Header.tsx';
import { notificationsExample } from './Notification.tsx';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

const currentUser: User = {
  userType: 'local',
  name: 'John Doe',
  email: 'john.doe@example.com',
  locale: {
    id: 'en',
    name: 'English',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const SignedIn: Story = {
  render: (props) => (
    <Header
      {...props}
      currentUser={currentUser}
      userNavigation={userNavigationExample}
      sidebarDisabledOnPaths={[]}
    ></Header>
  ),
};

export const UnreadNotifications: Story = {
  render: (props) => (
    <Header
      {...props}
      currentUser={currentUser}
      sidebarDisabledOnPaths={[]}
      notifications={notificationsExample}
    ></Header>
  ),
};
