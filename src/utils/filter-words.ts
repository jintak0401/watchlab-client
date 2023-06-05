import Fuse from 'fuse.js';

import { GlossaryChar, Word } from '@/types';

const options = {
  shouldSort: true,
  minMatchCharLength: 1,
  threshold: 0.3,
  fieldNormWeight: 1.5,
};

type KeyType =
  | {
      name: string;
      weight: number;
    }
  | string;

export const fuzzySearch = <T>(list: T[], pattern: string, keys: KeyType[]) => {
  const fuse = new Fuse(list, { ...options, keys });
  return fuse.search(pattern);
};

export const filterWordsWithStart = (words: Word[], start: GlossaryChar) => {
  if (start === '@') {
    return [];
  } else if ('aäàœAÄ'.includes(start)) {
    return words.filter(({ word }) => /^[aäàœAÄ]/.test(word));
  } else if ('eéèêëEÉÈÊË'.includes(start)) {
    return words.filter(({ word }) => /^[eéèêëEÉÈÊË]/.test(word));
  } else if ('iïîIÏÎ'.includes(start)) {
    return words.filter(({ word }) => /^[iïîIÏÎ]/.test(word));
  } else if ('oöôOÖÔ'.includes(start)) {
    return words.filter(({ word }) => /^[oöôOÖÔ]/.test(word));
  } else if ('uüûUÜÛ'.includes(start)) {
    return words.filter(({ word }) => /^[uüûUÜÛ]/.test(word));
  } else if ('yÿYŸ'.includes(start)) {
    return words.filter(({ word }) => /^[yÿYŸ]/.test(word));
  } else if ('cçCÇ'.includes(start)) {
    return words.filter(({ word }) => /^[cçCÇ]/.test(word));
  } else if ('nñNÑ'.includes(start)) {
    return words.filter(({ word }) => /^[nñNÑ]/.test(word));
  } else if ('sßSẞ'.includes(start)) {
    return words.filter(({ word }) => /^[sßSẞ]/.test(word));
  } else if (start.match(/^[a-zA-Z]+$/)) {
    return words.filter(({ word }) => word[0] === start);
  } else {
    return words.filter(
      ({ word }) => !word.match(/^[a-zA-ZäàœÄéèêëÉÈÊËïîÏÎöôÖÔüûÜÛÿŸçÇñÑßẞ]/)
    );
  }
};
