import { atom } from 'jotai';

import { TPostSortBy } from '@/types';

export const profileSortAtom = atom<TPostSortBy>(null);
