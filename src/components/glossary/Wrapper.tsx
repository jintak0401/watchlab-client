import { ReactNode } from 'react';
import 'twin.macro';

interface Props {
  children?: ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div tw="h-screen w-screen bg-glossary">
      <div tw="flex h-full w-full items-center justify-center bg-gradient-to-b from-black to-transparent">
        {children}
      </div>
    </div>
  );
};
export default Wrapper;
