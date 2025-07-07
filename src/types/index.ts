export interface Dice {
  amount: number; // Number of dice to roll
  sides: number; // Number of sides on the dice
}

export type Ability = "str" | "dex" | "con" | "int" | "wis" | "cha"; // Abilities (e.g., Strength, Dexterity, etc.)

export type Save = "fortitude" | "reflex" | "will"; // Types of saves (e.g., Fortitude, Reflex, Will)
