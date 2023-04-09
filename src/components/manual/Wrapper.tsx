import { PropsWithTwChildren } from 'react';
import 'twin.macro';

const Wrapper = ({ children, className }: PropsWithTwChildren) => {
  return (
    <div tw="h-screen w-screen bg-manual">
      <div tw="relative flex h-full w-full flex-col items-center overflow-y-scroll bg-gradient-to-b from-black to-transparent">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};
export default Wrapper;
