import { CriticalHit, DamageType } from "../damage";

export type WeaponType =
  | "melee"
  | "ranged"
  | "natural"
  | "unarmed"
  | "thrown"
  | "siege"
  | "other";

export type WeaponProficiencyType = "simple" | "martial" | "exotic";

export type WeaponWeightType =
  | "light"
  | "one-handed"
  | "two-handed"
  | "special";

export interface WeaponBase {
  name: string; // Name of the weapon (e.g., "Longsword", "Shortbow", etc.)
  description?: string | null; // Description of the weapon (e.g., "A versatile melee weapon")
  type: WeaponType; // Type of the weapon (e.g., melee, ranged)
  weightType: WeaponWeightType; // Weight type of the weapon (e.g., light, one-handed, two-handed)
  proficiencyType?: WeaponProficiencyType | null; // Proficiency type (e.g., simple, martial, exotic)
  damage: DamageType; // Base damage type (e.g., slashing, piercing, bludgeoning)
  damageExtra: DamageType | null; // Extra damage type (e.g., fire, cold, etc.)
  critical: CriticalHit; // Critical hit information (e.g., x2, x3, etc.)
  range?: number | null; // Range for ranged weapons (in cells)
  weight?: number | null; // Weight of the weapon (in pounds)
  material?: string | null; // Material of the weapon (e.g., "steel", "mithral", etc.)
  category?: string | null; // Category of the weapon (e.g., "simple", "martial", "exotic")
  price?: number | null; // Price of the weapon (in gold pieces)
}

export interface WeaponEnchantment {
  name: string; // Name of the enchantment (e.g., "Flaming", "Frost", etc.)
  description: string | null; // Description of the enchantment (e.g., "Deals an extra 1d6 fire damage")
  bonus?: number; // Bonus provided by the enchantment (e.g., +1, +2, etc.)
  price?: number; // Price of the enchantment (in gold pieces)
  damageType?: DamageType | null; // Type of damage provided by the enchantment (e.g., fire, cold, etc.)
  criticalMultiplierMod?: number | null; // Bonus to critical hit damage (e.g., x2, x3, etc.)
  criticalRangeMod?: number | null; // Bonus to critical hit range (e.g., 19-20 for a keen weapon)
  rangeBonus?: number | null; // Bonus to range (in cells)
}

export interface Weapon {
  weaponBase: WeaponBase; // Base weapon information
  nameSpecial?: string | null; // Name of the weapon (e.g., "Lucky Longsword", "Shadow Shortbow", etc.)
  masterwork?: boolean | null; // Is the weapon excellent (e.g., masterwork, etc.)
  enchantments?: WeaponEnchantment[] | null; // Array of enchantments applied to the weapon
}
