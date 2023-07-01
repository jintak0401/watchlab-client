export const padZero = (num: number, length = 2) =>
  num.toString().padStart(length, '0');

const RULES = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const ROMANS: (keyof typeof RULES)[] = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'XXX',
  'XX',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];
export const convertArabicToRoman = (num: number) => {
  let res = '';

  for (let i = 0; i < ROMANS.length; ++i) {
    const val = RULES[ROMANS[i]];

    while (num >= val) {
      num -= val;
      res += ROMANS[i];
    }
  }
  return res;
};
