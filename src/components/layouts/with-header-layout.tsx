'use client';

import { PropsWithChildren } from 'react';
import Header from 'src/components/common/header';
import 'twin.macro';

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
