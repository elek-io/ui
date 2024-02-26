import { cva, type VariantProps } from 'class-variance-authority';

const styles = cva('');

export interface ProgressProps extends VariantProps<typeof styles> {
  percentageDone: number;
  title?: string;
}

export function Progress(props: ProgressProps) {
  const percentageDoneStyle = {
    width: `${props.percentageDone}%`,
  };

  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-white">
          {props.title}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-white">
          {props.percentageDone}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-brand-600 h-2.5 rounded-full"
          style={percentageDoneStyle}
        ></div>
      </div>
    </>
  );
}
