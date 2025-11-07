import { Ability } from ".";

export interface SkillBase {
  id: string; // Unique identifier for the skill (e.g., "acrobatics", "stealth", etc.)
  name: string; // Name of the skill (e.g., "Acrobatics", "Stealth", etc.)
  description?: string | null; // Description of the skill (e.g., "A skill used for acrobatic maneuvers")
  ability: Ability; // Associated ability (e.g., "Dexterity", "Intelligence", etc.)
  trainedOnly?: boolean | null; // Is the skill trained only?
  armorCheckPenalty?: number | null; // Modifier for armor check penalty (e.g., swim - x2, jump - x1, listen - x0)
  bonusRankSkills?: string[] | null; // Array of skills that receive a bonus +2 from this skill after gain 5 ranks (e.g., "swim", "jump", etc.)
}

export interface CharacterSkill {
  skillBase: SkillBase; // Base skill information
  isClassSkill: boolean; // Is the skill a class skill?
  ranks: number; // Number of ranks in the skill (e.g., 0, 1, 2, etc.)
}
