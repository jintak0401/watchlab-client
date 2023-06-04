import { PropsWithTwChildren } from 'react';
import tw from 'twin.macro';

const Description = ({ children, className }: PropsWithTwChildren) => {
  return <DIV className={className}>{children}</DIV>;
};

const DIV = tw.div`whitespace-pre-line text-center font-normal text-white text-2xl`;

export default Description;
