import React from 'react';

import AppLayout from '@layout/AppLayout/AppLayout';

import CategoryButton from '@pages/Main/CategoryButton/CategoryButton';

const Main = () => {
  const categoryItems = [
    {
      id: 0,
      title: 'Заспокоїтись',
      description: '',
      path: '/calm-down',
    },
    {
      id: 1,
      title: 'Допомога',
      description: '',
      path: '/help',
    },
    {
      id: 2,
      title: 'Мені тривожно',
      description: '',
      path: '/anxiety',
    },
    {
      id: 3,
      title: 'Мене поранило',
      description: '',
      path: '/contacts',
    },
    {
      id: 4,
      title: 'Контакти',
      description: '',
      path: '/contacts',
    },
  ];
  return (
    <AppLayout>
      <div className="flex flex-col gap-y-4">
        {categoryItems.map((cat) => (
          <CategoryButton
            key={cat.id}
            path={cat.path}
            title={cat.title}
            description={cat.description}
          />
        ))}
      </div>
    </AppLayout>
  );
};

export default Main;
