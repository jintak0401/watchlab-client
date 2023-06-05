export const fallbackLng = 'en';
export const languages = [fallbackLng] as const;
export type TLang = (typeof languages)[number];
export const defaultNS = 'translation';

export const getOptions = (
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) => {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};
