import styled from '@emotion/styled';
import { PropsWithTwChildren } from 'react';
import tw from 'twin.macro';

type Props = PropsWithTwChildren;

const Description = ({ children, className }: Props) => {
  return <DIV className={className}>{children}</DIV>;
};

const DIV = styled.div(() => [
  tw`whitespace-pre-line text-center font-normal text-white text-3xl`,
]);

export default Description;
