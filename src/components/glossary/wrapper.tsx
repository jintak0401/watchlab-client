'use client';

import { PropsWithChildren } from 'react';
import 'twin.macro';

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div tw="h-screen w-screen overflow-hidden bg-glossary">
      <div tw="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-black to-transparent">
        {children}
      </div>
    </div>
  );
};
export default Wrapper;
