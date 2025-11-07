import { Dice } from ".";

export type DamageType =
  | "fire" // Energy-based damage types
  | "cold" // Energy-based damage types
  | "electricity" // Energy-based damage types
  | "acid" // Energy-based damage types
  | "sonic" // Energy-based damage types
  | "force" // Energy-based damage types
  | "negative" // Energy-based damage types
  | "positive" // Energy-based damage types
  | "bleed" // Damage types that are not energy-based
  | "death" // Damage types that are not energy-based
  | "mind" // Damage types that are not energy-based
  | "poison" // Damage types that are not energy-based
  | "disease" // Damage types that are not energy-based
  | "good" // Alignment-based damage types
  | "evil" // Alignment-based damage types
  | "law" // Alignment-based damage types
  | "chaos" // Alignment-based damage types
  | "silver" // Silver damage (e.g., from a silver weapon)
  | "coldIron" // Cold iron damage (e.g., from a cold iron weapon)
  | "adamantine" // Adamantine damage (e.g., from an adamantine weapon)
  | "mithral" // Mithral damage (e.g., from a mithral weapon)
  | "magic" // Magic damage (e.g., from a magic weapon or spell)
  | "nonlethal" // Nonlethal damage (e.g., from a nonlethal weapon or effect)
  | "untyped"; // Untyped damage (e.g., from a non-specific source)

export interface DamageReduction {
  type: DamageType; // Type of damage reduction (e.g., fire, cold, etc. - will be used to determine if the damage is reduced; untyped - always reduced)
  amount: number; // Amount of damage reduction
}

export interface DamageVulnerability {
  type: DamageType; // Type of damage vulnerability (e.g., fire, cold, etc. - will be used to determine if the damage is increased; untyped - always increased)
  mod: number; // Amount of damage vulnerability modifier (e.g., 1 for +50% damage, 2 for +100% damage, etc.)
}

export interface DamageImmunity {
  type: DamageType; // Type of damage immunity (e.g., fire, cold, etc. - will be used to determine if the damage is negated; untyped - absolutely negated)
}

export interface Damage {
  types: DamageType[]; // Type of damage (e.g., fire, cold, etc.)
  dice: Dice; // Dice object representing the damage roll (e.g., 1d6, 2d8, etc.)
}

export interface CriticalHit {
  rangeFrom: number; // Minimum roll for a critical hit (e.g., 20 for a natural 20)
  multiplier: number; // Multiplier for the damage roll on a critical hit (e.g., x2, x3, etc.)
}
