import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormInput } from './FormInput.tsx';

const meta: Meta<typeof FormInput> = {
  title: 'Form/Input',
  component: FormInput,
  args: {
    type: 'text',
    label: 'Label',
    description: 'The description of this input',
    placeholder: 'The placeholder',
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Text: Story = {
  render: (props) => {
    const {
      register,
      formState: { errors },
    } = useForm<{ name: string }>();

    return (
      <div>
        <FormInput
          {...props}
          name="name"
          register={register}
          errors={errors}
        ></FormInput>
      </div>
    );
  },
};

export const Number: Story = {
  render: (props) => {
    const {
      register,
      formState: { errors },
    } = useForm<{ name: string }>();

    return (
      <div>
        <FormInput
          {...props}
          name="name"
          type="number"
          register={register}
          errors={errors}
        ></FormInput>
      </div>
    );
  },
};

export const Password: Story = {
  render: (props) => {
    const {
      register,
      formState: { errors },
    } = useForm<{ name: string }>();

    return (
      <div>
        <FormInput
          {...props}
          name="name"
          type="password"
          register={register}
          errors={errors}
        ></FormInput>
      </div>
    );
  },
};
