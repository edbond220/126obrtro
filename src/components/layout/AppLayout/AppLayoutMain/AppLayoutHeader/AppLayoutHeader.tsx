import React from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

type AppLayoutHeaderProps = {};

const AppLayoutHeader = ({}: AppLayoutHeaderProps) => {
  const navigate = useNavigate();
  const match = useMatch('/');

  return (
    <header className="fixed flex bg-white py-4 px-8 w-full justify-between align-center">
      <div>{!match && <ArrowLeft onClick={() => navigate(-1)} size={32} />}</div>
      <div className="text-2xl font-medium">126 ОБрТрО</div>
      <Link to="/" className="flex w-8 h-8">
        <img src="/logo.svg" alt="Логотип" />
      </Link>
    </header>
  );
};

export default AppLayoutHeader;
