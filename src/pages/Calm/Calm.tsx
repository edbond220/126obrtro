import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AppLayout from '@layout/AppLayout/AppLayout';

import './calm.css';

type PageState = 'wait' | 'start' | 'playing' | 'stop';
type BreathType = 'inhale' | 'exhale';

const Calm = () => {
  let interval: NodeJS.Timer;
  const body = document.getElementsByTagName('body')[0];
  const maxBreath = 5;
  const refBreathType = useRef<any>(null);
  const refBreathCount = useRef<any>(null);
  const [breathCount, setBreathCount] = useState(1);
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
    setBreathCount(1);
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

  const breath2 = () => {
    if (breathType === 'inhale') {
      if (breathCount === maxBreath - 1) {
        setBreathType('exhale');
      }
      setBreathCount((count) => count + 1);
    } else {
      if (breathCount === 1) {
        setBreathType('inhale');
      }
      setBreathCount((count) => count - 1);
    }
  };

  useEffect(() => {
    if (pageState === 'playing') {
      interval = setInterval(breath2, 1000);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [pageState, breathCount, breathType]);

  useEffect(() => {
    return () => endPlay();
  }, []);

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
          <div className="relative flex h-full flex-col justify-center align-center text-center">
            <div className="pulsating-circle" />
            <div className="relative">
              <div className="h-8 flex justify-center">
                <TransitionGroup>
                  <CSSTransition
                    key={breathType}
                    addEndListener={(node, done) =>
                      node.addEventListener('transitionend', done, false)
                    }
                    classNames="fade"
                  >
                    <h1 ref={refBreathType} className="text-2xl absolute -translate-x-1/2">
                      {breathType === 'inhale' ? 'Вдох' : 'Видох'}{' '}
                    </h1>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              <div className="h-10 flex justify-center mt-4">
                <TransitionGroup>
                  <CSSTransition
                    key={breathCount}
                    addEndListener={(node, done) =>
                      node.addEventListener('transitionend', done, false)
                    }
                    classNames="fade"
                  >
                    <h2 ref={refBreathCount} className="text-4xl absolute -translate-x-1/2">
                      {breathCount}
                    </h2>
                  </CSSTransition>
                </TransitionGroup>
              </div>

              <button className="mt-4 opacity-50" onClick={handleStop}>
                Закінчити
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Calm;
