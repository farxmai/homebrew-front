export type EquipmentType =
  | "armor" // Armor equipment (e.g., chainmail, plate armor, etc.)
  | "shield" // Shield equipment (e.g., buckler, tower shield, etc.)
  | "boots" // Boots equipment (e.g., boots of speed, etc.)
  | "gloves" // Gloves equipment (e.g., gloves of dexterity, etc.)
  | "belt" // Belt equipment (e.g., belt of giant strength, etc.)
  | "cloak" // Cloak equipment (e.g., cloak of resistance, etc.)
  | "ring" // Ring equipment (e.g., ring of protection, etc.)
  | "amulet" // Amulet equipment (e.g., amulet of natural armor, etc.)
  | "head" // Head equipment (e.g., helmet, headband, etc.)
  | "body" // Body equipment (e.g., armor, robe, etc.)
  | "special"; // Special equipment (e.g., items that don't fit into other categories)

export type EquipmentSlotType =
  | "head" // Head slot (e.g., helmet, headband, etc.)
  | "neck" // Neck slot (e.g., necklace, collar, etc.)
  | "body" // Body slot (e.g., armor, robe, etc.)
  | "waist" // Waist slot (e.g., belt, girdle, etc.)
  | "shoulder" // Back slot (e.g., cloak, cape, etc.)
  | "arms" // Arms slot (e.g., bracers, armguards, etc.)
  | "hands" // Hands slot (e.g., gloves, gauntlets, etc.)
  | "legs" // Legs slot (e.g., greaves, leg armor, etc.)
  | "feet" // Feet slot (e.g., boots, shoes, etc.)
  | "ring" // Ring slot (e.g., ring of protection, etc.)
  | "special"; // Special slot (e.g., items that don't fit into other categories)

export type EquipmentProficiencyType = "light" | "medium" | "heavy" | "shield"; // Armor types (e.g., light, medium, heavy, shield)

export interface EquipmentBase {
  name: string; // Name of the equipment (e.g., "Chainmail", etc.)
  description: string | null; // Description of the equipment (e.g., "A sturdy suit of armor")
  type: EquipmentType; // Type of the equipment (e.g., armor, shield, etc.)
  weight?: number | null; // Weight of the equipment (in pounds)
  price?: number | null; // Price of the equipment (in gold pieces)
  material?: string | null; // Material of the equipment (e.g., "steel", "mithral", etc.)
  slotsBase?: EquipmentSlotType[] | null; // Array of slots the equipment can occupy (e.g., head, neck, etc.)
  slotsOptional?: EquipmentSlotType[] | null; // Array of slots the equipment can occupy (e.g., head, neck, etc.)
  armorType?: EquipmentProficiencyType | null; // Type of armor (e.g., light, medium, heavy, shield)
  acArmor?: number | null; // Armor class from armor
  acShield?: number | null; // Armor class from shield
  acDeflect?: number | null; // Armor class from deflection bonuses
  acNature?: number | null; // Armor class from natural armor
  acDexterityMax?: number | null; // Max dexterity bonus from armor
  spellFailure?: number | null; // Spell failure chance (e.g., 0%, 5%, etc.)
  skillPenalty?: number | null; // Skill penalty from armor
}
