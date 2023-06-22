import { Word } from '@/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const instanceOfWord = (obj: any): obj is Word => {
  return 'word' in obj && 'description' in obj;
};

export const glossaryChars = `@ABCDEFGHIJKLMNOPQRSTUVWXYZ#`.split('');
