import {
  Cormorant_Garamond,
  Crimson_Pro,
  Crimson_Text,
  Della_Respira,
  Inknut_Antiqua,
  Libre_Baskerville,
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

export const libre = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
});

export const della = Della_Respira({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-della-respira',
});
