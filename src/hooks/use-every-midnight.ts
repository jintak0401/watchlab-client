import { useEffect } from 'react';

import { ONE_DAY_MS } from '@/utils/constants';

const useEveryMidnight = (callback: () => void) => {
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const currentDate = new Date();
    const nextMidnight = new Date();
    nextMidnight.setDate(currentDate.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);
    const timeUntilMidnight = Number(nextMidnight) - Number(currentDate);

    const timeout = setTimeout(() => {
      callback();
      interval = setInterval(() => {
        callback();
      }, ONE_DAY_MS);
    }, timeUntilMidnight);

    return () => {
      clearTimeout(timeout);
      interval && clearInterval(interval);
    };
  }, []);
};

export default useEveryMidnight;
