import React, { useEffect, useState } from 'react';

import AppLayout from '@layout/AppLayout/AppLayout';

type PageState = 'wait' | 'start' | 'playing' | 'stop';
type BreathType = 'inhale' | 'exhale';

const Calm = () => {
  let interval: NodeJS.Timer;
  const body = document.getElementsByTagName('body')[0];
  const maxBreath = 4;
  const [breathCount, setBreathCount] = useState(0);
  const [breathType, setBreathType] = useState<BreathType>('inhale');
  const [pageState, setPageState] = useState<PageState>('wait');

  const handleStart = () => {
    setPageState('playing');
    body.classList.add('body-calm');
  };

  const handleStop = () => {
    endPlay();
  };

  const endPlay = () => {
    setPageState('wait');
    setBreathCount(0);
    setBreathType('inhale');
    clearInterval(interval);
    body.classList.remove('body-calm');
  };

  const breath = () => {
    if (breathCount === maxBreath) {
      setBreathCount(0);
      if (breathType === 'inhale') {
        setBreathType('exhale');
      } else {
        setBreathType('inhale');
      }
    }
    setBreathCount((count) => count + 1);
  };

  useEffect(() => {
    if (pageState === 'playing') {
      interval = setInterval(breath, 1000);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [pageState, breathCount, breathType]);

  return (
    <AppLayout>
      <div className="h-[calc(100vh-128px)]">
        {pageState === 'wait' && (
          <div className="flex h-full flex-col justify-center items-center">
            <button className="text-3xl" onClick={handleStart}>
              Почати
            </button>
          </div>
        )}
        {pageState === 'playing' && (
          <div className="flex h-full flex-col justify-center align-center text-center">
            <h1 className="text-2xl">{breathType === 'inhale' ? 'Вдох' : 'Видох'} </h1>
            <h2 className="text-4xl mt-4">{breathCount}</h2>
            <button className="mt-4" onClick={handleStop}>
              Закінчити
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Calm;
