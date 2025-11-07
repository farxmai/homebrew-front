import { StatsBase } from ".";
import { ItemBase } from "./items/item";
import { CharacterSkill } from "./skill";

export interface CharacterBaseInfo {
  name: string; // Name of the character (e.g., "John Doe")
  player: string; // Name of the player (e.g., "Jane Smith")
  alignment: string; // Alignment of the character (e.g., "Chaotic Good", "Lawful Neutral")
  age: number; // Age of the character (e.g., 25)
  gender: string;
  background: string; // Background of the character (e.g., "Noble", "Soldier")
}

export interface CharacterAbilities {
  str: number; // Strength score (e.g., 10, 12, 14)
  dex: number; // Dexterity score (e.g., 10, 12, 14)
  con: number; // Constitution score (e.g., 10, 12, 14)
  int: number; // Intelligence score (e.g., 10, 12, 14)
  wis: number; // Wisdom score (e.g., 10, 12, 14)
  cha: number; // Charisma score (e.g., 10, 12, 14)
}

export interface CharacterSave {
  fortitude: number; // Fortitude save modifier (e.g., +2, +3)
  reflex: number; // Reflex save modifier (e.g., +2, +3)
  will: number; // Will save modifier (e.g., +2, +3)
}

export interface Character extends CharacterBaseInfo {
  level: number; // Level of the character (e.g., 1, 2, 3)
  abilities: CharacterAbilities; // Abilities of the character (e.g., strength, dexterity, etc.)
  race: string; //
  classes: string[]; // Array of classes the character belongs to (e.g., ["Fighter", "Wizard"])
  skills: CharacterSkill[]; // Array of skills the character has (e.g., ["Acrobatics", "Stealth"])
  feats: any[]; // Array of feats the character has (e.g., ["Weapon Focus", "Toughness"])
  inventory: ItemBase[]; // Array of items in the character's inventory (e.g., ["Longsword", "Healing Potion"])
  weapons: ItemBase[]; // Array of weapons the character possesses (e.g., ["Longsword", "Shortbow"])
  equipment: ItemBase[]; // Array of equipment the character possesses (e.g., ["Chainmail", "Shield"])
  languages: string[]; // Array of languages the character speaks (e.g., ["Common", "Elvish"])
  hitPoints: number; // Total hit points of the character (e.g., 10, 20, 30)
  tempHitPoints: number; // Temporary hit points of the character (e.g., 5, 10, 15)
}

export interface CharacterRace {
  name: string;
  description: string | null;
  feats: any[] | null;
  size: number; // Size modifier (e.g., 0 for Medium, -1 for Small, +1 for Large)
}
