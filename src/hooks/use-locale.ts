'use client';

import { useParams } from 'next/navigation';

import { Locale } from '~/i18n-config';

const useLocale = (): Locale => {
  return useParams().lang as Locale;
};

export default useLocale;
