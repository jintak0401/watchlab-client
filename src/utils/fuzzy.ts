import Fuse from 'fuse.js';

const options = {
  shouldSort: true,
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.6,
  fieldNormWeight: 1,
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
