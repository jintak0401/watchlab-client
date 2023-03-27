export interface Word {
  word: string;
  description: string;
}

export const glossaryChars = `@ABCDEFGHIJKLMNOPQRSTUVWXYZ#`.split('');
export type GlossaryChar = (typeof glossaryChars)[number];
