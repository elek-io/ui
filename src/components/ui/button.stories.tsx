import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button.tsx';

const meta: Meta<typeof Button> = {
  title: 'New/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
  render: (props) => <Button {...props}>Button</Button>,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: Primary.render,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: Primary.render,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: Primary.render,
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
  render: Primary.render,
};

// export const Success: Story = {
//   args: {
//     intent: 'success',
//   },
//   render: Primary.render,
// };

// export const Warning: Story = {
//   args: {
//     intent: 'warning',
//   },
//   render: Primary.render,
// };

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: Primary.render,
};

export const IsDisabled: Story = {
  args: {
    disabled: true,
  },
  render: Primary.render,
};

export const IsLoading: Story = {
  args: {
    disabled: true,
  },
  render: (props) => (
    <Button {...props}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin"></ReloadIcon>
      Please wait
    </Button>
  ),
};

// export const PrependIcon: Story = {
//   args: {
//     intent: 'secondary',
//     prependIcon: HeartIcon,
//   },
//   render: Primary.render,
// };

// export const AppendIcon: Story = {
//   args: {
//     intent: 'secondary',
//     appendIcon: HeartIcon,
//   },
//   render: Primary.render,
// };

// export const WithAvatar: Story = {
//   args: {
//     intent: 'avatar',
//   },
//   render: (props) => (
//     <Button {...props}>
//       <Avatar name="John Doe"></Avatar>
//     </Button>
//   ),
// };

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
  },
  render: (props) => (
    <Button {...props}>
      <ChevronRightIcon className="h-4 w-4"></ChevronRightIcon>
    </Button>
  ),
};

export const WithIcon: Story = {
  args: {},
  render: (props) => (
    <Button {...props}>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4"></EnvelopeOpenIcon>
      Login with Email
    </Button>
  ),
};

export const AsChild: Story = {
  args: {
    asChild: true,
  },
  render: (props) => (
    <Button {...props}>
      <a href="/login">Login</a>
    </Button>
  ),
};
