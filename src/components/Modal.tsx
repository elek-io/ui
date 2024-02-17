import { Dialog, Transition } from '@headlessui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { Fragment, type ReactElement, type ReactNode } from 'react';
import { Button } from './Button.tsx';

const styles = cva(
  'inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60',
  {
    variants: {
      intent: {
        primary:
          'button-intent-primary bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-500',
        secondary:
          'button-intent-secondary bg-white hover:bg-gray-50 text-gray-700 focus:ring-brand-500 !border-gray-300',
        link: 'button-intent-link bg-transparent shadow-none text-brand-600 hover:text-brand-700 underline focus:ring-brand-500',
        success:
          'button-intent-success bg-green-700 hover:bg-green-800 text-white focus:ring-green-700',
        warning:
          'button-intent-warning bg-yellow-400 hover:bg-yellow-500 text-gray-700 focus:ring-yellow-400',
        danger:
          'button-intent-danger bg-red-600 hover:bg-red-700 text-white focus:ring-red-600',
        icon: '!shadow-none !rounded-full !px-2 !py-2',
        avatar: '!shadow-none !rounded-full !px-0 !py-0',
      },
      state: {
        loading: 'state-loading disabled:cursor-wait',
        disabled: 'disabled:cursor-not-allowed',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'secondary',
      state: null,
      fullWidth: false,
    },
  }
);

export interface ModalProps extends VariantProps<typeof styles> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  description?: string;
  children?: ReactNode;
  actions?: ReactElement;
  size?: 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-7xl';
}

export function Modal(props: ModalProps) {
  function closeModal() {
    props.setIsOpen(false);
  }

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full ${props.size} transform overflow-clip rounded-2xl bg-white text-left align-middle shadow-xl transition-all`}
              >
                {props.title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg pt-6 pl-6 pr-6 font-medium leading-6 text-gray-900"
                  >
                    {props.title}
                  </Dialog.Title>
                )}

                {props.description && (
                  <Dialog.Description className="mt-2 px-6 text-sm text-gray-500">
                    {props.description}
                  </Dialog.Description>
                )}

                {(props.title || props.description) && (
                  <div className="block border-b pt-6"></div>
                )}

                <div className="p-6">{props.children}</div>

                <div className="px-6 py-4 bg-gray-50 border-t md:flex-none flex flex-row space-x-2 justify-end">
                  {props.actions && props.actions}
                  <Button onClick={closeModal}>Close</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
