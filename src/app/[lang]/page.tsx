import WithHeaderLayout from '@/components/layouts/with-header-layout';

import { RootProps } from '@/app/[lang]/layout';

const RootPage = ({ children }: RootProps) => {
  return <WithHeaderLayout>{children}</WithHeaderLayout>;
};

export default RootPage;
