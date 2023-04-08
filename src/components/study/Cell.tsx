import NextImage from 'next/image';
import Link from 'next/link';
import { PropsWithTwChildren } from 'react';
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
      tw="flex flex-col items-center justify-center bg-study-cell text-center"
      css={{ width: 350, height: 300 }}
      href={href}
    >
      <h3 tw="font-crimson-pro font-bold" css={{ fontSize: 50 }}>
        {title}
      </h3>
      <NextImage src={image} alt={title} width={150} height={150} />
      <span tw="font-cormor font-normal leading-8" css={{ fontSize: 30 }}>
        {description}
      </span>
    </Link>
  );
};

export default Cell;
