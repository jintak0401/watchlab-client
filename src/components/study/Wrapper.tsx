import { PropsWithTwChildren } from 'react';
import 'twin.macro';

const Wrapper = ({ children, className }: PropsWithTwChildren) => {
  return (
    <div tw="h-screen w-screen overflow-hidden bg-study">
      <div
        tw="relative flex h-full w-full flex-col items-center bg-gradient-to-b from-black to-transparent"
        className={className}
      >
        {children}
      </div>
    </div>
  );
};
export default Wrapper;
