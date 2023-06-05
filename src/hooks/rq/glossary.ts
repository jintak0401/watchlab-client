import { useQuery } from '@tanstack/react-query';

import { getGlossary } from '@/request/glossary';
import { GLOSSARY_KEY } from '@/utils/constants';

export const getGlossaryKey = (locale: string) => [GLOSSARY_KEY, locale];

export const useGlossaryQuery = (locale: string) =>
  useQuery(getGlossaryKey(locale), async () =>
    (await getGlossary(locale))
      .map(({ id, ...rest }) => ({
        ...rest,
      }))
      .sort((a, b) => (a.word > b.word ? 1 : -1))
  );
