import { atom } from 'jotai';

import { GlossaryChar } from '@/types';

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
