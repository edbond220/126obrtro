import React, { useEffect, useState } from 'react';

import AppLayout from '@layout/AppLayout/AppLayout';

type PageState = 'wait' | 'start' | 'playing' | 'stop';
type BreathType = 'inhale' | 'exhale';

const Calm = () => {
  let interval: NodeJS.Timer;
  const maxBreath = 4;
  const [breathCount, setBreathCount] = useState(0);
  const [breathType, setBreathType] = useState<BreathType>('inhale');
  const [pageState, setPageState] = useState<PageState>('wait');

  const handleStart = () => {
    setPageState('playing');
  };

  const handleStop = () => {
    endPlay();
  };

  const endPlay = () => {
    setPageState('wait');
    setBreathCount(0);
    setBreathType('inhale');
    clearInterval(interval);
  };

  const breath = () => {
    console.log('breath');
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
      <div>
        {pageState === 'wait' && <button onClick={handleStart}>Старт</button>}
        {pageState === 'playing' && <button onClick={handleStop}>Закінчити</button>}
      </div>
      {pageState === 'playing' && (
        <div className="flex flex-col justify-center align-center text-center">
          <h1 className="text-3xl">{breathType === 'inhale' ? 'Вдох' : 'Видох'} </h1>
          <h2 className="text-4xl">{breathCount}</h2>
        </div>
      )}
    </AppLayout>
  );
};

export default Calm;
