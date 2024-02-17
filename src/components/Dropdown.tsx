import { Menu, Transition } from '@headlessui/react';
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid';
import { cva, type VariantProps } from 'class-variance-authority';
import { Fragment, type ReactNode } from 'react';
import type { Icon } from '../util/index.js';

const styles = cva(
  'absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  {
    variants: {
      position: {
        'bottom-right': 'right-0',
        'bottom-left': 'left-0',
        'top-right': 'bottom-0 right-0',
        'top-left': 'bottom-0 left-0',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
    },
  }
);

export type DropdownItem = {
  name: string;
  href: string;
  icon?: Icon;
};

export type DropdownItemGroup = {
  items: DropdownItem[];
};

export const dropdownItemGroupsExample: DropdownItemGroup[] = [
  {
    items: [
      {
        name: 'Edit',
        href: '#edit',
        icon: PencilSquareIcon,
      },
      {
        name: 'Duplicate',
        href: '#duplicate',
        icon: DocumentDuplicateIcon,
      },
    ],
  },
  {
    items: [
      {
        name: 'Archive',
        href: '#archive',
        icon: ArchiveBoxIcon,
      },
      {
        name: 'Move',
        href: '#move',
        icon: ArrowRightCircleIcon,
      },
    ],
  },
  {
    items: [
      {
        name: 'Share',
        href: '#share',
        icon: UserPlusIcon,
      },
      {
        name: 'Add to favorites',
        href: '#favorites',
        icon: HeartIcon,
      },
    ],
  },
  {
    items: [
      {
        name: 'Delete',
        href: '#',
        icon: TrashIcon,
      },
    ],
  },
];

export interface DropdownProps extends VariantProps<typeof styles> {
  itemGroups: DropdownItemGroup[];
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Dropdown(props: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button as="div">{props.children}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles(props)}>
          {props.itemGroups.map((itemGroup, groupIndex) => {
            return (
              <div className="py-1" key={groupIndex}>
                {itemGroup.items.map((item) => {
                  return (
                    <Menu.Item key={item.href} as={Fragment}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-4 py-2 text-sm'
                          )}
                        >
                          {item.icon ? (
                            <item.icon
                              className={classNames(
                                active
                                  ? 'text-gray-500'
                                  : 'text-gray-400 group-hover:text-gray-500',
                                'mr-4 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            ''
                          )}

                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
