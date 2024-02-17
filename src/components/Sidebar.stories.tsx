import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Sidebar,
  exampleProject,
  sidebarNavigationExample,
} from './Sidebar.tsx';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {
    currentPath: '/dashboard',
    currentProject: exampleProject,
    disabledOnPaths: [],
    navigation: sidebarNavigationExample,
  },
  render: (props) => {
    const [isOpen, setOpen] = useState(true);

    return <Sidebar {...props} isOpen={isOpen} setOpen={setOpen}></Sidebar>;
  },
};
