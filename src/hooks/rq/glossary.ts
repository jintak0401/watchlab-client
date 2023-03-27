import { useQuery } from '@tanstack/react-query';

import { getGlossary } from '@/request/glossary';
import { Word } from '@/types';
import { GLOSSARY_KEY } from '@/utils/constants';

export const getGlossaryKey = (locale: string) => [GLOSSARY_KEY, locale];

export const useGlossaryQuery = (locale: string) =>
  useQuery<Word[]>(getGlossaryKey(locale), async () =>
    (await getGlossary(locale)).map(({ id, ...rest }) => ({
      ...rest,
    }))
  );
