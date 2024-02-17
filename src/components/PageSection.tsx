import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactElement, ReactNode } from 'react';

const styles = cva();

export interface PageSectionProps extends VariantProps<typeof styles> {
  children?: ReactNode;
  title?: string;
  description?: string;
  actions?: ReactElement;
}

export function PageSection(props: PageSectionProps) {
  return (
    <section className="px-4 py-6 sm:p-6 lg:pb-8 border-t border-gray-200">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-base font-semibold leading-6 text-gray-900">
            {props.title}
          </h2>
          <p className="mt-2 text-sm text-gray-700">{props.description}</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {props.actions && props.actions}
        </div>
      </div>
      {props.children}
    </section>
  );
}
