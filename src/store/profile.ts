import { atom } from 'jotai';

import { Profile } from '@/types';

const _profileAtom = atom<Profile[]>([]);

export const profileAtom = atom(
  (get) => get(_profileAtom),
  (get, set, update: Profile[]) => {
    set(_profileAtom, update);
  }
);
