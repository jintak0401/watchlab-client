'use client';

import { PropsWithChildren } from 'react';
import 'twin.macro';

import Header from '@/components/common/Header';

type Props = PropsWithChildren;

const WithHeaderLayout = ({ children }: Props) => {
  return (
    <div tw="min-h-screen bg-cream pb-10">
      <Header />
      {children}
    </div>
  );
};

export default WithHeaderLayout;
