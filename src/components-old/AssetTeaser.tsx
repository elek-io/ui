import type { Asset } from '@elek-io/shared';
import { cva, type VariantProps } from 'class-variance-authority';
import type { MouseEventHandler } from 'react';
import { formatBytes } from '../util/index.ts';

const styles = cva('', {
  variants: {
    mode: {
      light: '',
      dark: '',
    },
  },
  defaultVariants: {
    mode: 'light',
  },
});

export interface AssetTeaserProps extends VariantProps<typeof styles>, Asset {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function AssetTeaser(props: AssetTeaserProps) {
  return (
    <>
      <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={props.absolutePath}
          alt={`Asset "${props.name}"`}
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button
          type="button"
          onClick={props.onClick}
          className="absolute inset-0 focus:outline-none"
        >
          <span className="sr-only">View details for {props.name}</span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {props.name}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {formatBytes(props.size)}
      </p>
    </>
  );
}
