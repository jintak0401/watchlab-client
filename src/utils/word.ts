import { Word } from '@/types';

export const instanceOfWord = (obj: any): obj is Word => {
  return 'word' in obj && 'description' in obj;
};

export const glossaryChars = `@ABCDEFGHIJKLMNOPQRSTUVWXYZ#`.split('');
