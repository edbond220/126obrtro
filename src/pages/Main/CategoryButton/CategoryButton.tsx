import React from 'react';
import { Link } from 'react-router-dom';

type CategoryButtonProps = {
  path: string;
  title: string;
  description?: string;
};

const CategoryButton = ({ path, title, description = '' }: CategoryButtonProps) => {
  return (
    <Link
      to={path}
      className="flex flex-col items-center bg-blue-900 text-white p-8 rounded-2xl text-3xl"
    >
      <h2>{title}</h2>
      {description && <div>{description}</div>}
    </Link>
  );
};

export default CategoryButton;
