import { Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Fragment,
  type Dispatch,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
} from 'react';

const styles = cva('');

export interface Breadcrumb {
  name: string;
  href: string;
}

export type Breadcrumbs = Breadcrumb[];

export const breadcrumbsExample: Breadcrumbs = [
  {
    name: 'First page',
    href: '#',
  },
  {
    name: 'Second page',
    href: '#',
  },
  {
    name: 'Third page',
    href: '#',
  },
  {
    name: 'Fourth page',
    href: '#',
  },
];

export interface PageProps extends VariantProps<typeof styles> {
  breadcrumbs?: Breadcrumbs;
  title: string;
  description?: ReactElement;
  actions?: ReactElement;
  layout?: 'overlap' | 'overlap-card' | 'overlap-card-no-space';
  children: ReactNode;
  aside?: {
    title: string;
    children: ReactElement;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
}

export interface PageAsideProps extends VariantProps<typeof styles> {}

export function Page(props: PageProps) {
  // @todo children needs to get this as property
  // const [isPageLoading, setPageLoading] = useState(false);

  return (
    <>
      <main className="relative flex-1 overflow-y-auto">
        <div className="relative overflow-hidden bg-brand-900 pb-32">
          <div className="relative container mx-auto">
            <div className="md:flex md:items-center px-4 sm:px-6 lg:px-8 py-10">
              <div className="md:flex-auto">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-2">
                    {props.breadcrumbs?.map((crumb, crumbIndex) => {
                      return (
                        <li>
                          <div className="flex items-center">
                            {crumbIndex !== 0 && (
                              <ChevronRightIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-500"
                                aria-hidden="true"
                              />
                            )}

                            <a href={crumb.href}>
                              {' '}
                              {/* @todo probably should use Link component of react router */}
                              <a
                                className={`${
                                  crumbIndex !== 0 && 'ml-2'
                                } text-sm font-medium text-gray-300 hover:text-white`}
                              >
                                {crumb.name}
                              </a>
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  {props.title}
                </h1>
                {props.description && (
                  <p className="mt-2 text-sm text-white">{props.description}</p>
                )}
              </div>
              <div className="mt-4 md:mt-0 md:ml-16 md:flex-none flex flex-row space-x-2">
                {props.actions && props.actions}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative container mx-auto -mt-32">
            <div className="p-4 sm:p-6 lg:p-8 !pt-0">
              <Transition
                appear={true}
                show={true}
                enter="transform transition ease-in-out duration-200"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-200"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                {
                  <>
                    {props.layout === 'overlap' ? (
                      <>{props.children}</>
                    ) : props.layout === 'overlap-card-no-space' ? (
                      <div className="rounded-lg bg-white shadow">
                        {props.children}
                      </div>
                    ) : (
                      <div className="rounded-lg bg-white shadow p-4">
                        {props.children}
                      </div>
                    )}
                  </>
                }
              </Transition>
            </div>
          </div>
        </div>
      </main>

      {/* @todo for desktop slide in from right is ok, but on mobile it should slide in from bottom (bottom sheet) to make it consistent with most mobile apps */}
      <Transition
        show={props.aside?.isOpen || false}
        as={Fragment}
        enter="transform transition ease-in-out duration-200"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white lg:block">
          <div className="flex h-full flex-col py-6">
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  {props.aside?.title}
                </h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => props.aside?.setIsOpen(false)}
                  >
                    <span className="sr-only">Close aside content</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mt-6 flex-1 px-4 sm:px-6">
              {props.aside?.children}
            </div>
          </div>
        </aside>
      </Transition>
    </>
  );
}
