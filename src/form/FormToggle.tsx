import { Switch } from '@headlessui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { classNames } from '../util/index.ts';

const styles = cva('', {
  variants: {
    mode: {
      light: '',
      dark: '',
    },
    intent: {
      danger: '',
    },
  },
  defaultVariants: {
    mode: 'light',
  },
});

export interface FormToggleProps<T extends FieldValues>
  extends VariantProps<typeof styles> {
  name: Path<T>;
  control: Control<T, any>;
  // register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
}

export function FormToggle<T extends FieldValues>(props: FormToggleProps<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{ required: props.required }}
      render={({ field }) => (
        <Switch.Group as="div" className="flex items-center justify-between">
          <span className="flex flex-grow flex-col">
            <Switch.Label
              as="span"
              className="text-sm font-medium leading-6 text-gray-900"
              passive
            >
              {props.label || props.name}
            </Switch.Label>
            {props.description && (
              <Switch.Description as="span" className="text-sm text-gray-500">
                {props.description}
              </Switch.Description>
            )}
          </span>
          <Switch
            className={classNames(
              field.value ? 'bg-brand-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2'
            )}
            {...field}
          >
            <span
              aria-hidden="true"
              className={classNames(
                field.value ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
        </Switch.Group>
      )}
    ></Controller>
  );
}
