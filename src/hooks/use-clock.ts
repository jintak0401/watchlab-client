'use client';

import { useEffect, useState } from 'react';

const useClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date());
    }, 100);
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);
    };
  }, []);

  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

export default useClock;
