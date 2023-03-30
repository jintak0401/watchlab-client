import _axios from '@/request/instance';
import { Word } from '@/types';

const glossaryReqUrl = (locale: string) => {
  return `/${locale}/dictionary`;
};

export const getGlossary = async (locale: string) => {
  const url = glossaryReqUrl(locale);
  const res = await _axios.get<(Word & { id: number })[]>(url);
  return res?.data;
};
