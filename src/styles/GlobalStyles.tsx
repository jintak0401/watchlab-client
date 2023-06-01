import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  '*': {
    ...tw`font-serif`,
  },
  body: {
    ...tw`select-none overflow-x-hidden antialiased print:hidden`,
  },
  '.pagebreak': {
    height: 20,
    width: 1800,
    ...tw`bg-cream`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
