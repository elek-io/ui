import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormToggle } from './FormToggle.tsx';

const meta: Meta<typeof FormToggle> = {
  title: 'Form/Toggle',
  component: FormToggle,
  args: {
    label: 'Label',
    description: 'The description of this input',
  },
};

export default meta;
type Story = StoryObj<typeof FormToggle>;

export const Text: Story = {
  render: (props) => {
    const {
      control,
      formState: { errors },
    } = useForm<{ isEnabled: boolean }>();

    return (
      <div>
        <FormToggle
          {...props}
          name="isEnabled"
          control={control}
          errors={errors}
        ></FormToggle>
      </div>
    );
  },
};
