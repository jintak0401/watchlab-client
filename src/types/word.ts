export interface Word {
  word: string;
  description: string;
}

export const instanceOfWord = (obj: any): obj is Word => {
  return 'word' in obj && 'description' in obj;
};

export const glossaryChars = `@ABCDEFGHIJKLMNOPQRSTUVWXYZ#`.split('');
export type GlossaryChar = (typeof glossaryChars)[number];
