import type { Meta, StoryObj } from '@storybook/react';
import { AssetTeaser } from './AssetTeaser.tsx';

const meta: Meta<typeof AssetTeaser> = {
  title: 'Components/AssetTeaser',
  component: AssetTeaser,
};

export default meta;
type Story = StoryObj<typeof AssetTeaser>;

export const Single: Story = {
  args: {
    id: '9311d33c-078e-482a-aff3-f61862e17512',
    language: 'en',
    fileType: 'asset',
    name: 'My Asset',
    description: 'The description of this Asset',
    size: 369,
    extension: 'png',
    mimeType: 'image/png',
    created: 1670872688,
    updated: 1670872688,
    absolutePath:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
};

export const List: Story = {
  args: { ...Single.args },
  render: (props) => {
    return (
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {[props, props, props, props, props, props, props].map((props, i) => (
          <li key={i} className="relative">
            <AssetTeaser {...props}></AssetTeaser>
          </li>
        ))}
      </ul>
    );
  },
};
