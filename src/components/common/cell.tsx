import NextImage from 'next/image';
import NextLink from 'next/link';
import { PropsWithTw } from 'react';
import tw, { styled } from 'twin.macro';
import 'twin.macro';

interface Props extends PropsWithTw {
  href: string;
  title: string;
  description: string;
  image: string;
}

const Cell = ({ href, title, description, image, className }: Props) => {
  return (
    <NextLink
      css={[
        { width: 400, height: 360 },
        tw`flex flex-col items-center gap-4 rounded-md bg-study-cell p-2 text-center transition-transform hover:-translate-y-2`,
      ]}
      href={href}
      className={className}
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
