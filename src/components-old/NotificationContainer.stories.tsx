import type { Meta, StoryObj } from '@storybook/react';
import { notificationsExample } from './Notification.tsx';
import { NotificationContainer } from './NotificationContainer.tsx';

const meta: Meta<typeof NotificationContainer> = {
  title: 'Components/Notifications',
  component: NotificationContainer,
  args: {
    notifications: notificationsExample,
  },
};

export default meta;
type Story = StoryObj<typeof NotificationContainer>;

export const Template: Story = {
  render: (props) => <NotificationContainer {...props}></NotificationContainer>,
};
