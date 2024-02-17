import { PlusIcon } from '@heroicons/react/20/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { type ReactElement } from 'react';
import { Button } from './Button.tsx';
import { PageSection } from './PageSection.tsx';

const meta: Meta<typeof PageSection> = {
  title: 'Components/PageSection',
  component: PageSection,
  args: {
    title: 'Section title',
    description:
      'The sections description that explaines the following content.',
  },
};

export default meta;
type Story = StoryObj<typeof PageSection>;

function Actions(): ReactElement {
  return (
    <>
      <Button intent={'primary'} prependIcon={PlusIcon}>
        Call to action
      </Button>
    </>
  );
}

export const Bare: Story = {
  render: (props) => {
    return <PageSection {...props} actions={<Actions></Actions>}></PageSection>;
  },
};
