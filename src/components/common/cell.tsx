'use client';

import NextImage from 'next/image';
import NextLink from 'next/link';
import { CSSProperties, PropsWithTw } from 'react';
import tw, { styled } from 'twin.macro';
import 'twin.macro';

interface Props extends PropsWithTw {
  href: string;
  title: string;
  description: string;
  image: string;
  style?: CSSProperties;
}

const Cell = ({ href, title, description, image, className, style }: Props) => {
  return (
    <NextLink
      css={[
        { width: 400 },
        tw`flex h-full flex-col items-center gap-4 rounded-md bg-study-cell p-2 text-center transition-transform hover:-translate-y-2`,
      ]}
      href={href}
      className={className}
      style={style}
    >
      <CellTitle>{title}</CellTitle>
      <NextImage src={image} alt={title} width={150} height={150} />
      <CellDesc>{description}</CellDesc>
    </NextLink>
  );
};

const CellTitle = styled.h3(() => [
  tw`px-3 font-crimson-pro font-bold text-5xl`,
  tw`leading-none`,
]);

const CellDesc = styled.span(() => [
  tw`flex-1 flex items-center justify-center font-cormor font-normal text-2xl`,
  {
    fontSize: 27,
  },
]);

export default Cell;
