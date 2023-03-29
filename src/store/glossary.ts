import { atom } from 'jotai';

import { GlossaryChar, Word } from '@/types';

const _glossaryCharAtom = atom<GlossaryChar>('@');

export const glossaryCharAtom = atom(
  (get) => get(_glossaryCharAtom),
  (get, set, update: GlossaryChar) => {
    set(_glossaryCharAtom, update);
  }
);

const _glossarySearchAtom = atom('');

export const glossarySearchAtom = atom(
  (get) => get(_glossarySearchAtom),
  (get, set, update: string) => {
    set(_glossarySearchAtom, update);
  }
);

const _glossaryTableAtom = atom(false);

export const glossaryTableAtom = atom(
  (get) => get(_glossaryTableAtom),
  (get, set, update: boolean) => {
    set(_glossaryTableAtom, update);
  }
);

const _glossaryFilteredWordsAtom = atom<Word[]>([]);

export const glossaryFilteredWordsAtom = atom(
  (get) => get(_glossaryFilteredWordsAtom),
  (get, set, update: Word[]) => {
    set(_glossaryFilteredWordsAtom, update);
  }
);
