export interface Dice {
  amount: number; // Number of dice to roll
  sides: number; // Number of sides on the dice
}

export type Ability = "str" | "dex" | "con" | "int" | "wis" | "cha"; // Abilities (e.g., Strength, Dexterity, etc.)

export type Save = "fortitude" | "reflex" | "will"; // Types of saves (e.g., Fortitude, Reflex, Will)

export interface ParamsBase {
  str?: number | null; // Strength
  dex?: number | null; // Dexterity
  con?: number | null; // Constitution
  int?: number | null; // Intelligence
  wis?: number | null; // Wisdom
  cha?: number | null; // Charisma
  fortitude?: number | null; // Fortitude save
  reflex?: number | null; // Reflex save
  will?: number | null; // Will save
  attackMelee?: number | null; // Attack modifier
  attackRanged?: number | null; // Attack modifier for ranged attacks
  attackGrapple?: number | null; // Grapple attack modifier
}

export interface StatsBase {
  str?: number | null; // Strength
  dex?: number | null; // Dexterity
  con?: number | null; // Constitution
  int?: number | null; // Intelligence
  wis?: number | null; // Wisdom
  cha?: number | null; // Charisma
  fortitude?: number | null; // Fortitude save
  reflex?: number | null; // Reflex save
  will?: number | null; // Will save
  acArmor?: number | null; // Armor class from armor
  acShield?: number | null; // Armor class from shield
  acDeflect?: number | null; // Armor class from deflection bonuses
  acNature?: number | null; // Armor class from natural armor
  acDexterityAvailable?: boolean | null; // Is dexterity bonus available for AC calculation
  acDexterityMax?: number | null; // Max dexterity bonus from armor
  skillPenalty?: number | null; // Skill penalty from armor
  size?: number | null; // Size modifier (e.g., 0 for Medium, -1 for Small, +1 for Large)
  attackMelee?: number | null; // Attack modifier
  attackRanged?: number | null; // Attack modifier for ranged attacks
  attackGrapple?: number | null; // Grapple attack modifier
  damageMelee?: number | null; // Damage modifier for melee attacks
  damageRanged?: number | null; // Damage modifier for ranged attacks
  tempHP?: number | null; // Temporary hit points
  resistSpell?: number | null; // Resistance to spells
  resistPsionic?: number | null; // Resistance to psionic powers
  resistFire?: number | null; // Resistance to fire damage
  resistCold?: number | null; // Resistance to cold damage
  resistElectricity?: number | null; // Resistance to electricity damage
  resistAcid?: number | null; // Resistance to acid damage
  resistSonic?: number | null; // Resistance to sonic damage
  resistForce?: number | null; // Resistance to force damage
  resistNegative?: number | null; // Resistance to negative energy damage
  resistPositive?: number | null; // Resistance to positive energy damage
  resistBleed?: number | null; // Resistance to bleed damage
  resistDeath?: number | null; // Resistance to death effects
  resistMind?: number | null; // Resistance to mind-affecting effects
  resistPoison?: number | null; // Resistance to poison damage
  resistDisease?: number | null; // Resistance to disease effects
  resistGood?: number | null; // Resistance to good-aligned effects
  resistEvil?: number | null; // Resistance to evil-aligned effects
  resistLaw?: number | null; // Resistance to law-aligned effects
  resistChaos?: number | null; // Resistance to chaos-aligned effects
}
