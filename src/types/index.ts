export interface OptionType {
  value: string; // Unique value for the option
  label: string; // Display label for the option
  Icon?: React.ComponentType<any> | null; // Optional icon component for the option
}

export interface Dice {
  amount: number; // Number of dice to roll
  sides: number; // Number of sides on the dice
}

export type Ability = "str" | "dex" | "con" | "int" | "wis" | "cha"; // Abilities (e.g., Strength, Dexterity, etc.)

export type Save = "fortitude" | "reflex" | "will"; // Types of saves (e.g., Fortitude, Reflex, Will)

export interface StatsBase {
  // Base stats
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  fortitude?: number;
  reflex?: number;
  will?: number;

  // Body stats
  speedBonus?: number;
  speedMax?: number;
  speedMod?: number;
  size?: number;

  // Armor stats
  acArmor?: number;
  acShield?: number;
  acNatural?: number;
  acDeflection?: number;
  acMisc?: number;
  acDexterityAvailable?: boolean;
  acDexterityMax?: number;
  skillPenalty?: number;

  // Attack and damage stats
  attackMelee?: number;
  attackRanged?: number;
  attackTouch?: number;
  attackGrapple?: number;
  damageMelee?: number;
  damageRanged?: number;
  hpTemp?: number;
  // TODO: weapon specific bonuses

  // Defense stats
  damageReduction?: number;
  damageReductionBypasses?: string; // e.g., "slashing", "piercing", "bludgeoning"
  resistCritChance?: number; // percentage chance to resist critical hits

  // Energy resistances (99 = immune)
  energyResistAcid?: number;
  energyResistCold?: number;
  energyResistElectricity?: number;
  energyResistFire?: number;
  energyResistSonic?: number;
  energyResistForce?: number;
  energyResistNegative?: number;
  energyResistPositive?: number;

  // Saves specific bonuses (99 = immune)
  poisonResistance?: number;
  charmResistance?: number;
  fearResistance?: number;
  sleepResistance?: number;
  diseaseResistance?: number;
  mindAffectingResistance?: number;
  deathResistance?: number;
  paralysisResistance?: number;
  fatigueResistance?: number;

  // Spell
  spellResistance?: number;
  psionicResistance?: number;
  casterLevelModifier?: number;

  skillBonuses?: {
    skillId: number;
    bonus: number;
  }[];
}
