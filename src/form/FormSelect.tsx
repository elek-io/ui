import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { cva, type VariantProps } from 'class-variance-authority';
import { Fragment } from 'react';
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

// export type FormSelectOption<T> = T & { disabled?: boolean };

export interface FormSelectProps<T extends FieldValues>
  extends VariantProps<typeof styles> {
  name: Path<T>;
  options: { name: string; value: T[keyof T]; disabled?: boolean }[];
  control: Control<T, any>;
  // register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
}

// @todo maybe its easier / better to just wrap the headless ui components with classNames and use them how they are intended
export function FormSelect<T extends FieldValues>(props: FormSelectProps<T>) {
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.options[0].value}
        rules={{ required: props.required }}
        render={({ field }) => (
          <Listbox
            aria-describedby={
              props.description ? `${props.name}-description` : ''
            }
            {...field}
          >
            {({ open: isOpen }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  {props.label || props.name}
                </Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:text-sm">
                    <span className="block truncate">
                      {
                        props.options.find((option) => {
                          return option.value === field.value;
                        })?.name
                      }
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {props.options.map((option, optionIndex) => (
                        <Listbox.Option
                          key={optionIndex}
                          value={option.value}
                          disabled={option.disabled}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'relative cursor-pointer py-2 pl-3 pr-9 hover:bg-'
                            )
                          }
                        >
                          {option.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        )}
      ></Controller>
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
