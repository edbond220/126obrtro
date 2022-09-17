import React from 'react';
import clsx from 'clsx';

import UiCard from '@ui/UiCard/UiCard';

type CardProps = {
  title?: string;
  isScrollable?: boolean;
  wrapperClass?: string;
  action?: JSX.Element | null;
} & React.ComponentProps<'div'>;

const Card = ({
  title = '',
  children,
  className,
  wrapperClass = '',
  isScrollable = false,
  action = null,
}: CardProps) => {
  const wrapperClasses = clsx(
    'w-full min-w-0 py-4',
    isScrollable && 'pl-4 pr-2',
    !isScrollable && 'px-4',
    wrapperClass
  );
  const innerClasses = clsx(isScrollable && 'overflow-auto scrollbar', className);

  return (
    <UiCard className={wrapperClasses}>
      <div className={innerClasses}>
        {title && (
          <div className="flex gap-x-4 items-center mb-3">
            <h1  className="font-bold mb-0">
              {title}
            </h1>
            {action && action}
          </div>
        )}
        <div>{children}</div>
      </div>
    </UiCard>
  );
};
export default Card;
