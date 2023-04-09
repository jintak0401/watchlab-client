import styled from '@emotion/styled';
import NextImage from 'next/image';
import Link from 'next/link';
import { PropsWithTwChildren } from 'react';
import tw from 'twin.macro';
import 'twin.macro';

interface Props extends PropsWithTwChildren {
  href: string;
  title: string;
  description: string;
  image: string;
}

const Cell = ({ href, title, description, image }: Props) => {
  return (
    <Link
      tw="flex flex-col items-center gap-4 bg-study-cell p-2 text-center transition-transform hover:-translate-y-2"
      css={{ width: 400, height: 360 }}
      href={href}
    >
      <CellTitle>{title}</CellTitle>
      <NextImage src={image} alt={title} width={150} height={150} />
      <CellDesc>{description}</CellDesc>
    </Link>
  );
};

const CellTitle = styled.h3(() => [
  tw`font-crimson-pro font-bold text-5xl`,
  tw`leading-none`,
]);

const CellDesc = tw.span`flex-1 flex items-center justify-center font-cormor font-normal text-3xl`;

export default Cell;
