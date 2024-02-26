import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormTextarea } from './FormTextarea.tsx';

const meta: Meta<typeof FormTextarea> = {
  title: 'Form/Textarea',
  component: FormTextarea,
  args: {
    label: 'Label',
    description: 'The description of this input',
    placeholder: 'The placeholder',
    rows: 3,
  },
};

export default meta;
type Story = StoryObj<typeof FormTextarea>;

export const Template: Story = {
  render: (props) => {
    const {
      register,
      formState: { errors },
    } = useForm<{ name: string }>();

    return (
      <div>
        <FormTextarea
          {...props}
          name="name"
          register={register}
          errors={errors}
        ></FormTextarea>
      </div>
    );
  },
};
