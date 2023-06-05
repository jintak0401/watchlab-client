import { ReactNode } from 'react';

import WithHeaderLayout from '@/components/layouts/with-header-layout';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <WithHeaderLayout>{children}</WithHeaderLayout>;
};

export default Layout;
