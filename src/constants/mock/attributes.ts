const attributes = [
  { id: "str", name: "Strength", abbrev: "STR" },
  { id: "dex", name: "Dexterity", abbrev: "DEX" },
  { id: "con", name: "Constitution", abbrev: "CON" },
  { id: "int", name: "Intelligence", abbrev: "INT" },
  { id: "wis", name: "Wisdom", abbrev: "WIS" },
  { id: "cha", name: "Charisma", abbrev: "CHA" },
];

export default attributes;

export const mockAttributesValues: Record<string, number> = {
  str: 10,
  dex: 12,
  con: 14,
  int: 16,
  wis: 8,
  cha: 20,
};
