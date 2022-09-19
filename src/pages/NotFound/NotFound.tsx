import React from 'react';
import { NavLink } from 'react-router-dom';

type NotFoundProps = {
  to?: string;
};

const NotFound = ({ to = '' }: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center pt-20 w-full h-full">
      <h1 className="text-4xl font-bold">Сторінка не знайдена</h1>
      <p className="text-lg">
        <NavLink to={to}>Повернутися на головну</NavLink>
      </p>
    </div>
  );
};

export default NotFound;
