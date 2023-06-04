'use client';

import { useParams } from 'next/navigation';
import { TLang } from '@/i18n/settings';

const useLocale = (): TLang => {
  return useParams().lang as TLang;
};

export default useLocale;
