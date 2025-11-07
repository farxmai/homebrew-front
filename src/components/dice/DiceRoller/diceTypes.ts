export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20;

export type DiceType = {
  id: string;
  sides: DiceSides;
  value: number | null;
  color?: string;
  group?: string;
};

export const DICE: DiceSides[] = [4, 6, 8, 10, 12, 20];
