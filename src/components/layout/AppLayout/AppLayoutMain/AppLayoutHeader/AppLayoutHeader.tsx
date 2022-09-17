import React from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'phosphor-react';

type AppLayoutHeaderProps = {};

const AppLayoutHeader = ({}: AppLayoutHeaderProps) => {
  const navigate = useNavigate();
  const match = useMatch('/');

  return (
    <header className="flex mb-4 py-4 px-8 w-full justify-between align-center">
      <div>{!match && <ArrowLeft onClick={() => navigate(-1)} size={32} />}</div>
      <div className="text-2xl">126 ОБрТрО</div>
      <Link to="/">
        <Heart color="#7E00C2" size={32} weight="fill" />
      </Link>
    </header>
  );
};

export default AppLayoutHeader;
