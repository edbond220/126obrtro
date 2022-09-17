import React from 'react';
import clsx from 'clsx';

import AppLayoutHeader from '@layout/AppLayout/AppLayoutMain/AppLayoutHeader/AppLayoutHeader';

type AppLayoutMainProps = {
  isSidebarOpen: boolean;
} & React.ComponentProps<'main'>;

const AppLayoutMain = ({ isSidebarOpen, children }: AppLayoutMainProps) => {
  const classes = clsx('flex-1 pl-16', isSidebarOpen && 'overlay');
  return (
    <main className={classes}>
      <AppLayoutHeader />
      <div className="px-8 h-full">{children}</div>
    </main>
  );
};

export default AppLayoutMain;
