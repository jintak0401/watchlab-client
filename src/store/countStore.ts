import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const COUNT_KEY = 'count';

const _countStorageAtom = atomWithStorage<number>(COUNT_KEY, 0);

export const countStorageAtom = atom(
  (get) => get(_countStorageAtom),
  (get, set, update: number) => {
    set(_countStorageAtom, update);
  }
);

const _countAtom = atom(0);

export const countAtom = atom(
  (get) => get(_countAtom),
  (get, set, update: number) => {
    set(_countAtom, update);
  }
);
