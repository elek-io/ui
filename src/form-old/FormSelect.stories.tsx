import type { ComponentStory, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormSelect } from './FormSelect.tsx';

const meta: Meta<typeof FormSelect> = {
  title: 'Form/Select',
  component: FormSelect,
  args: {
    label: 'Label',
    description: 'The description of this input',
    options: [
      { name: 'One', value: 1 },
      { name: 'Two', value: 2 },
      { name: 'Three', value: 3 },
    ],
  },
};

export default meta;
// type Story = StoryObj<typeof FormSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSelect> = (props) => {
  const {
    control,
    formState: { errors },
  } = useForm<{ number: number }>();

  return (
    <div>
      <FormSelect
        {...props}
        name="number"
        control={control}
        errors={errors}
      ></FormSelect>
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
