import { PropsWithChildren } from 'react';
import 'twin.macro';

import Header from '@/components/common/Header';

type Props = PropsWithChildren;

const DefaultLayout = ({ children }: Props) => {
  return (
    <div tw="min-h-screen bg-cream">
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
