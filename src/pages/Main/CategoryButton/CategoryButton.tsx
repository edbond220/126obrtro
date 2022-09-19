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
      className="category-button flex flex-col items-center text-white p-8 rounded-3xl text-2xl"
    >
      <h2>{title}</h2>
      {description && <div>{description}</div>}
    </Link>
  );
};

export default CategoryButton;
