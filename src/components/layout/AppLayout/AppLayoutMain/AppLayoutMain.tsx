import React from 'react';
import clsx from 'clsx';

import AppLayoutHeader from '@layout/AppLayout/AppLayoutMain/AppLayoutHeader/AppLayoutHeader';

type AppLayoutMainProps = {} & React.ComponentProps<'main'>;

const AppLayoutMain = ({ children }: AppLayoutMainProps) => {
  const classes = clsx('flex-1');
  return (
    <main className={classes}>
      <AppLayoutHeader />
      <div className="px-8 pt-20 h-full">{children}</div>
    </main>
  );
};

export default AppLayoutMain;
