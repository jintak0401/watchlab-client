import siteMetadata from 'data/site-metadata';
import process from 'process';

import { Word } from '@/types';

const glossaryReqUrl = (locale: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/${locale}/dictionary`;
};

export const getGlossary = async (locale: string): Promise<Word[]> => {
  const url = glossaryReqUrl(locale);
  const res = await fetch(url, {
    method: 'GET',
    next: {
      revalidate: siteMetadata.revalidate,
    },
  });
  return res.json();
};
