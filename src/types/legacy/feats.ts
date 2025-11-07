import { Ability, StatsBase } from ".";
import { EquipmentProficiencyType } from "./items/equipment";
import { WeaponProficiencyType } from "./items/weapon";

export type FeatType =
  | "weapon"
  | "proficiency"
  | "skill"
  | "combat"
  | "metamagic"
  | "itemCreation"
  | "other";

export interface FeatWeaponProps {
  weaponBaseId?: string; // Base weapon ID (e.g., "longsword", "shortbow")
  bonusAttack?: number; // Bonus to attack rolls (e.g., +1, +2)
  bonusDamage?: number; // Bonus to damage rolls (e.g., +1, +2)

  // TODO: should be created automatically after creating new weaponBase
}

export interface FeatProficiencyProps {
  armorType?: EquipmentProficiencyType; // Type of armor proficiency (e.g., "light", "medium", "heavy")
  weaponType?: WeaponProficiencyType; // Type of weapon proficiency (e.g., "simple", "martial")

  // TODO: should be created on init for base types
}

export interface FeatSkillProps {
  skillId?: string; // Skill ID (e.g., "Acrobatics", "Stealth")
  bonus?: number; // Bonus to skill checks (e.g., +2, +3)
  abilityOverride?: Ability; // Ability override for the skill (e.g., "strength", "dexterity")
}

export interface FeatCombatProps {
  combatManeuverId?: string; // Combat maneuver ID (e.g., "grapple", "trip")
  bonus?: number; // Bonus to combat maneuver checks (e.g., +2, +3)
}

export interface FeatRequirement {
  minAttackBonus?: number; // Minimum attack bonus required (e.g., +2, +3)
  spellCaster?: boolean; // Is the class a spell caster?
  classes?: string[]; // Array of class IDs (e.g., ["fighter", "wizard"])
  feats?: string[]; // Array of feat IDs (e.g., ["weaponFocus", "toughness"])
  abilities?: {
    str: number | null; // Strength score (e.g., 10, 12, 14)
    dex: number | null; // Dexterity score (e.g., 10, 12, 14)
    con: number | null; // Constitution score (e.g., 10, 12, 14)
    int: number | null; // Intelligence score (e.g., 10, 12, 14)
    wis: number | null; // Wisdom score (e.g., 10, 12, 14)
    cha: number | null; // Charisma score (e.g., 10, 12, 14)
  } | null; // Object with ability scores (e.g., { str: 13, dex: 12 })
  skills?:
    | {
        id: string; // Skill name (e.g., "Acrobatics", "Stealth")
        rank: number; // Minimum rank required in the skill (e.g., 5)
      }[]
    | null; // Array of skill requirements (e.g., [{ name: "Acrobatics", rank: 5 }])
}

export interface Feat {
  id: string;
  name: string;
  description: string;
  type: FeatType; // Type of the feat (e.g., weapon, armor, combat, etc.)
  isPassive: boolean; // feat bonuses always active or should be activated by checkbox
  isFighterBonusFeat?: boolean; // Is the feat a bonus feat for fighters?
  requirements: FeatRequirement[];
  weaponProps?: FeatWeaponProps[] | null; // Weapon properties (e.g., "light", "one-handed", "two-handed")
  proficiencyProps?: FeatProficiencyProps[] | null; // Proficiency properties (e.g., "armor", "weapon")
  skillProps?: FeatSkillProps[] | null; // Skill properties (e.g., "Acrobatics", "Stealth")
  combatProps?: FeatCombatProps | null; // Combat properties (e.g., "grapple", "trip")
  statsBase?: StatsBase | null; // Base stats bonuses (e.g., "strength", "dexterity")
  // TODO: add other props for other feat types
}
