import type { Meta, StoryObj } from '@storybook/react';
import { type ReactElement } from 'react';
import { Button } from './Button.tsx';
import { Page, breadcrumbsExample } from './Page.tsx';

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
  args: {
    title: 'Page title',
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

function Description(): ReactElement {
  return <>A text describing the pages content.</>;
}

function Actions(): ReactElement {
  return (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
      <Button>Action 3</Button>
    </>
  );
}

export const Bare: Story = {
  render: (props) => {
    return (
      <div className="flex w-full h-full">
        <div className="flex flex-1 items-stretch overflow-hidden">
          <Page {...props}></Page>
        </div>
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: (props) => {
    return (
      <div className="flex w-full h-full">
        <div className="flex flex-1 items-stretch overflow-hidden">
          <Page {...props} description={<Description></Description>}></Page>
        </div>
      </div>
    );
  },
};

export const WithActions: Story = {
  render: (props) => {
    return (
      <div className="flex w-full h-full">
        <div className="flex flex-1 items-stretch overflow-hidden">
          <Page
            {...props}
            description={<Description></Description>}
            actions={<Actions></Actions>}
          ></Page>
        </div>
      </div>
    );
  },
};

export const WithBreadcrumbs: Story = {
  render: (props) => {
    return (
      <div className="flex w-full h-full">
        <div className="flex flex-1 items-stretch overflow-hidden">
          <Page
            {...props}
            description={<Description></Description>}
            actions={<Actions></Actions>}
            breadcrumbs={breadcrumbsExample}
          ></Page>
        </div>
      </div>
    );
  },
};
