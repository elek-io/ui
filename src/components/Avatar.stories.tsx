import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar.tsx';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export const Initials: Story = {
  args: {
    name: 'John Doe',
  },
};

export const Status: Story = {
  args: {
    name: 'John Doe',
    status: 'available',
  },
};
