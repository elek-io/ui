import type { Meta, StoryObj } from '@storybook/react';
import { useState, type ReactElement } from 'react';
import { Button } from './Button.tsx';
import { Modal } from './Modal.tsx';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Minimal: Story = {
  args: {},
  render: (props) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Modal {...props} isOpen={isOpen} setIsOpen={setIsOpen}>
        Hello from the Modal
      </Modal>
    );
  },
};

export const Maximal: Story = {
  args: {
    title: 'This is a title',
    description:
      'This is a Modal which can be used for overlaying important information or requesting a user choice.',
  },
  render: (props) => {
    const [isOpen, setIsOpen] = useState(true);

    function Actions(): ReactElement {
      return (
        <>
          <Button intent={'primary'}>Accept</Button>
        </>
      );
    }

    return (
      <Modal
        {...props}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        actions={<Actions></Actions>}
      >
        Hello from the Modal
      </Modal>
    );
  },
};
