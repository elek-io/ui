import { cva, type VariantProps } from 'class-variance-authority';
import type { DragEvent, MouseEventHandler } from 'react';
import React from 'react';
import type { Icon } from '../util/index.js';

const styles = cva(
  'relative block w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-300 p-4 xl:p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
);

function onDragOver(event: DragEvent<HTMLButtonElement>) {
  event.preventDefault();
}

export interface EmptyStateProps extends VariantProps<typeof styles> {
  icon: Icon;
  title: string;
  description?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onDrop?: React.DragEventHandler<HTMLButtonElement>;
}

export function EmptyState(props: EmptyStateProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      onDrop={props.onDrop}
      onDragOver={props.onDrop ? onDragOver : undefined}
      className={styles()}
    >
      {props.icon ? (
        <props.icon
          className="mx-auto h-12 w-12 text-gray-400"
          aria-hidden="true"
        />
      ) : (
        ''
      )}
      <h3 className="mt-2 text-sm font-medium text-gray-900">{props.title}</h3>
      {props.description ? (
        <p className="mt-1 text-sm text-gray-500">{props.description}</p>
      ) : (
        ''
      )}
    </button>
  );
}
