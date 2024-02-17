import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

const styles = cva(
  'mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm',
  {
    variants: {
      disabled: {
        true: 'disabled:cursor-not-allowed',
        false: '',
      },
    },
  }
);

export interface FormInputProps<T extends FieldValues>
  extends VariantProps<typeof styles> {
  name: Path<T>;
  type: React.HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
}

export function FormInput<T extends FieldValues>(props: FormInputProps<T>) {
  return (
    <>
      <label
        htmlFor={`${props.name}-input`}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label || props.name}
      </label>
      <input
        {...props.register(props.name)}
        id={`${props.name}-input`}
        className={styles(props)}
        type={props.type}
        placeholder={props.placeholder}
        aria-describedby={
          props.errors[props.name]?.message
            ? `${props.name}-error`
            : '' + ' ' + props.description
              ? `${props.name}-description`
              : ''
        }
      ></input>
      {props.errors[props.name]?.message && (
        <p className="mt-2 text-sm text-red-600" id={`${props.name}-error`}>
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
      {props.description && (
        <p
          className="mt-2 text-sm text-gray-500"
          id={`${props.name}-description`}
        >
          {props.description}
        </p>
      )}
    </>
  );
}
