import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  '*': {
    ...tw`font-serif`,
  },
  body: {
    ...tw`flex min-h-screen select-none flex-col overflow-x-hidden antialiased print:hidden [&>main]:flex-1`,
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
    <CustomStyles />
  </>
);

export default GlobalStyles;
