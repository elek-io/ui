import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  AcademicCapIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { cva, type VariantProps } from 'class-variance-authority';
import { Fragment, useState } from 'react';
import type { Icon } from '../util/index.js';

const styles = cva('');

function getIcon(props: NotificationProps) {
  if (props.icon) {
    return props.icon;
  }
  if (props.intent) {
    switch (props.intent) {
      case NotificationIntent.INFO:
        return InformationCircleIcon;
      case NotificationIntent.SUCCESS:
        return CheckCircleIcon;
      case NotificationIntent.WARNING:
        return ExclamationCircleIcon;
      case NotificationIntent.DANGER:
        return XCircleIcon;
    }
  }
}

function getHighlightColor(props: NotificationProps) {
  if (props.intent) {
    switch (props.intent) {
      case NotificationIntent.INFO:
        return 'brand-700';
      case NotificationIntent.SUCCESS:
        return 'green-800';
      case NotificationIntent.WARNING:
        return 'yellow-500';
      case NotificationIntent.DANGER:
        return 'red-700';
    }
  }
}

export enum NotificationIntent {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export interface NotificationProps extends VariantProps<typeof styles> {
  intent?: NotificationIntent;
  icon?: Icon;
  title: string;
  description: string;
}

export const notificationsExample: NotificationProps[] = [
  {
    title: 'Custom notification',
    description: 'A notification with custom icon',
    icon: AcademicCapIcon,
  },
  {
    title: 'Successfull notification',
    description: 'A notification signaling a successfull operation',
    intent: NotificationIntent.SUCCESS,
  },
  {
    title: 'Warning notification',
    description:
      'A notification signaling a operation that triggered a warning',
    intent: NotificationIntent.WARNING,
  },
  {
    title: 'Danger notification',
    description: 'A notification signaling the operation triggered an error',
    intent: NotificationIntent.DANGER,
  },
];

export function Notification(props: NotificationProps) {
  const [isVisible, setVisible] = useState(true);
  const Icon = getIcon(props);
  const highlightColor = getHighlightColor(props);

  return (
    <Transition
      show={isVisible}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {Icon ? (
                <Icon
                  className={
                    highlightColor
                      ? `h-6 w-6 text-${highlightColor}`
                      : 'h-6 w-6 text-green-400'
                  }
                  aria-hidden="true"
                />
              ) : (
                ''
              )}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">{props.title}</p>
              <p className="mt-1 text-sm text-gray-500">{props.description}</p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
