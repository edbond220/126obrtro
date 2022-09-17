import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import AppLayoutMain from '@layout/AppLayout/AppLayoutMain/AppLayoutMain';

type AppLayoutProps = {} & React.ComponentProps<'div'>;

const AppLayout = ({ children, className }: AppLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const classes = clsx('flex w-full bg-gray-3 min-h-screen', className);

  const handleSidebarMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) return <div />;

  return (
    <div className={classes}>
      <AppLayoutMain isSidebarOpen={isSidebarOpen}>{children}</AppLayoutMain>
    </div>
  );
};

export default AppLayout;
