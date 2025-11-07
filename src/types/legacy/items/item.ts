export type ItemType =
  | "potion" // Potion item (e.g., healing potion, potion of strength, etc.)
  | "scroll" // Scroll item (e.g., scroll of fireball, scroll of teleportation, etc.)
  | "wand" // Wand item (e.g., wand of magic missiles, wand of fireballs, etc.)
  | "rod" // Rod item (e.g., rod of lordly might, rod of resurrection, etc.)
  | "staff" // Staff item (e.g., staff of power, staff of healing, etc.)
  | "weapon" // Weapon item (e.g., longsword, shortbow, etc.)
  | "equipment" // Equipment item (e.g., armor, shield, etc.)
  | "other"; // Other item types

export interface ItemBase {
  name: string; // Name of the item (e.g., "Potion of Healing", "Scroll of Fireball", etc.)
  description: string | null; // Description of the item (e.g., "A potion that heals 1d8+1 hit points")
  type: ItemType; // Type of the item (e.g., potion, scroll, wand, etc.)
  weight?: number | null; // Weight of the item (in pounds)
  potionProps?: any;
  scrollProps?: any;
  wandProps?: any;
  rodProps?: any;
  staffProps?: any;
  weaponProps?: string | null; // Weapon properties (e.g., "light", "one-handed", "two-handed")
  equipmentProps?: string | null; // Equipment properties (e.g., "armor", "shield", etc.)
}
