import React from 'react';
import clsx from 'clsx';

import AppLayoutMain from '@layout/AppLayout/AppLayoutMain/AppLayoutMain';

type AppLayoutProps = {} & React.ComponentProps<'div'>;

const AppLayout = ({ children, className }: AppLayoutProps) => {
  const classes = clsx('flex w-full max-w-lg min-h-screen', className);

  return (
    <div className={classes}>
      <AppLayoutMain>{children}</AppLayoutMain>
    </div>
  );
};

export default AppLayout;
