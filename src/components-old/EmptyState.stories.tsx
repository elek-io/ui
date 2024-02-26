import { FolderPlusIcon } from '@heroicons/react/20/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState.tsx';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Upload: Story = {
  render: (props) => (
    <div className="flex w-full h-full">
      <div className="flex flex-1 items-stretch overflow-hidden p-4">
        <EmptyState
          {...props}
          icon={FolderPlusIcon}
          title="Upload files"
          description="Drag and drop files or click to upload"
        ></EmptyState>
      </div>
    </div>
  ),
};
