'use client';

import { RefObject, useEffect } from 'react';

interface Props {
  target: RefObject<HTMLElement | null>;
  onIntersect: (entry: IntersectionObserverEntry[]) => void;
}

const observerOption = {
  threshold: 1,
};

const useIntersectionObserver = ({ target, onIntersect }: Props) => {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target?.current) {
      observer = new IntersectionObserver(onIntersect, observerOption);
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, onIntersect]);
};

export default useIntersectionObserver;
