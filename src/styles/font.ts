import {
  Cormorant_Garamond,
  Crimson_Pro,
  Crimson_Text,
  Inknut_Antiqua,
} from 'next/font/google';

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
});

export const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson-text',
});

export const crimsonPro = Crimson_Pro({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-crimson-pro',
});

export const inknutAntiqua = Inknut_Antiqua({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inknut-antiqua',
});
