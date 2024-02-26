import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar.tsx';
import { Button } from './Button.tsx';
import { Dropdown, dropdownItemGroupsExample } from './Dropdown.tsx';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const OnButton: Story = {
  render: (props) => (
    <Dropdown
      {...props}
      itemGroups={dropdownItemGroupsExample}
      position="bottom-left"
    >
      <Button appendIcon={ChevronDownIcon}>Dropdown</Button>
    </Dropdown>
  ),
};
export const OnAvatar: Story = {
  render: (props) => (
    <Dropdown
      {...props}
      itemGroups={dropdownItemGroupsExample}
      position="bottom-left"
    >
      <Button intent="avatar">
        <Avatar name="John Doe"></Avatar>
      </Button>
    </Dropdown>
  ),
};
export const OnIcon: Story = {
  render: (props) => (
    <Dropdown
      {...props}
      itemGroups={dropdownItemGroupsExample}
      position="bottom-left"
    >
      <Button intent="icon">
        <EllipsisVerticalIcon className="h-5 w-5"></EllipsisVerticalIcon>
      </Button>
    </Dropdown>
  ),
};
