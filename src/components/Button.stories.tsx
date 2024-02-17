import { EllipsisVerticalIcon, HeartIcon } from '@heroicons/react/20/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar.tsx';
import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: 'primary',
  },
  render: (props) => <Button {...props}>Button</Button>,
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
  },
  render: Primary.render,
};

export const Link: Story = {
  args: {
    intent: 'link',
  },
  render: Primary.render,
};

export const Success: Story = {
  args: {
    intent: 'success',
  },
  render: Primary.render,
};

export const Warning: Story = {
  args: {
    intent: 'warning',
  },
  render: Primary.render,
};

export const Danger: Story = {
  args: {
    intent: 'danger',
  },
  render: Primary.render,
};

export const IsLoading: Story = {
  args: {
    intent: 'primary',
    state: 'loading',
  },
  render: Primary.render,
};

export const IsDisabled: Story = {
  args: {
    intent: 'primary',
    state: 'disabled',
  },
  render: Primary.render,
};

export const PrependIcon: Story = {
  args: {
    intent: 'secondary',
    prependIcon: HeartIcon,
  },
  render: Primary.render,
};

export const AppendIcon: Story = {
  args: {
    intent: 'secondary',
    appendIcon: HeartIcon,
  },
  render: Primary.render,
};

export const WithAvatar: Story = {
  args: {
    intent: 'avatar',
  },
  render: (props) => (
    <Button {...props}>
      <Avatar name="John Doe"></Avatar>
    </Button>
  ),
};

export const WithIconOnly: Story = {
  args: {
    intent: 'icon',
  },
  render: (props) => (
    <Button {...props}>
      <EllipsisVerticalIcon className="h-5 w-5"></EllipsisVerticalIcon>
    </Button>
  ),
};
