export interface SpecialAbility {
  id: string; // Unique ID for the ability (e.g., "strength", "dexterity", etc.)
  name: string; // Name of the ability (e.g., "Strength", "Dexterity", etc.)
  type: "extraordinary" | "supernatural" | "spell-like"; // Type of the ability (e.g., "extraordinary", "supernatural", "spell-like")
  description: string; // Description of the ability (e.g., "Measures physical power")
  shortDescription: string; // Short description of the ability (e.g., "Physical power")
}
