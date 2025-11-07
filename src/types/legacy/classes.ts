import { Ability, Dice, StatsBase } from ".";
import { Feat } from "./feats";

export interface ClassLvlBonuses {
  classId: string;
  classLvl: number; // uniq
  baseAttack: number;
  fortitude?: number | null; // Fortitude save
  reflex?: number | null; // Reflex save
  will?: number | null; // Will save
  feats: Feat[];
}

export interface ClassSpell {
  spellId: string; // Unique ID for the spell (e.g., "fireball", "magic_missile")
  spellLvl: number; // Spell level (e.g., 1 - 9)
}

export interface ClassCasterProps {
  spellsPoints?: number; // for mana or power points based chars
  spellsPerDay?: {
    [key: number]: number; // e.g., { 1: 2, 2: 3 } for spell levels
  };
  spellsKnown?:
    | {
        [key: number]: number; // e.g., { 1: 2, 2: 3 } for spell known
      }
    | number;
}

export interface CharacterClass {
  id: string;
  name: string;
  description: string;
  baseSkillPoints: number;
  baseAttribute: Ability;
  diceHp: Dice;
  lvlBonuses: ClassLvlBonuses[];
  classSpells: ClassSpell[]; // Array of spells available to the class (e.g., ["fireball", "magic_missile"])
}
