import { cva, type VariantProps } from 'class-variance-authority';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

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

export interface FormTextareaProps<T extends FieldValues>
  extends VariantProps<typeof styles> {
  name: Path<T>;
  rows: number;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
}

export function FormTextarea<T extends FieldValues>(
  props: FormTextareaProps<T>
) {
  return (
    <>
      <label
        htmlFor={`${props.name}-textarea`}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label || props.name}
      </label>
      <textarea
        id={`${props.name}-textarea`}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm"
        rows={props.rows}
        placeholder={props.placeholder}
        aria-describedby={props.description ? `${props.name}-description` : ''}
        {...props.register(props.name, {
          required: props.required,
          disabled: props.disabled,
        })}
      ></textarea>
      {props.description ? (
        <p
          className="mt-2 text-sm text-gray-500"
          id={`${props.name}-description`}
        >
          {props.description}
        </p>
      ) : (
        ''
      )}
    </>
  );
}
