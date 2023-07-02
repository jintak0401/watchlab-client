import { PropsWithChildren } from 'react';
import Header from 'src/components/common/header';
import 'twin.macro';

import Footer from '@/components/common/footer';

import { FOOTER_HEIGHT } from '@/styles/footer';

type Props = PropsWithChildren;

const mainStyle = {
  height: '100%',
  backgroundColor: '#eeeae3',
  paddingBottom: FOOTER_HEIGHT,
};

const WithHeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={mainStyle}>{children}</main>
      <Footer />
    </>
  );
};

export default WithHeaderLayout;
