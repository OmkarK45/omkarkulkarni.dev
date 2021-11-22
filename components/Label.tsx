import clsx from 'clsx';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  variant?: 'brand' | 'default' | 'border' | '15';
  className?: string;
  small?: boolean;
};

const Label = ({ children, variant, small, className }: Props) => (
  <div
    className={clsx(
      'text-xs rounded-md leading-5  inline-flex items-center bg-pink-200 dark:bg-pink-900',
      {
        'py-0.5 px-1.5 sm:px-2': !small,
        'py-0.5 px-1': small
      },
      className
    )}
  >
    {children}
  </div>
);

type LabelsProps = {
  labels: string[];
  variant: Props['variant'];
  max?: number;
  small?: boolean;
  overflowDirection?: 'down' | 'right';
};

export const Labels = ({
  labels,
  variant,
  max = 3,
  small,
  overflowDirection = 'right'
}: LabelsProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center flex-wrap">
      {labels.slice(0, max).map((field) => (
        <span key={field}>
          <Label className="mr-2" small={small} variant={variant}>
            {field}
          </Label>
        </span>
      ))}
      {labels.length > 3 && (
        <span
          className="cursor-pointer"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Label small={small} variant={variant}>
            +{labels.length - max}
          </Label>
        </span>
      )}
      <div
        className={clsx('flex space-x-2', {
          'ml-2': overflowDirection === 'right',
          'space-x-2 absolute right-0 -bottom-8 z-50 ':
            overflowDirection === 'down'
        })}
      >
        {show &&
          labels.slice(max, labels.length).map((field) => (
            <Label key={field} variant={variant} small={small}>
              {field}
            </Label>
          ))}
      </div>
    </div>
  );
};

export { Label };
