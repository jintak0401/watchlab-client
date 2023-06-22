'use client';

import { useRef } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
const useDebounce = (callback: (cbArgs: any) => void, term: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  return (args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(args);
    }, term);
  };
};
export default useDebounce;
