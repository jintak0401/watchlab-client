import { PropsWithChildren } from 'react';

import Header from '@/components/common/Header';

type Props = PropsWithChildren;

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
