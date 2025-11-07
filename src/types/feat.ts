import { StatsBase } from ".";

export interface Requirement {
  id?: number;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  minBaseAttack?: number;
  minClassLevel?: number;
  classId?: number;
  other?: string;
  casterOnly?: boolean;
  divineOnly?: boolean;
  skills?: {
    skillId: number;
    minRank?: number;
  }[];
  feats?: {
    featRequirementId: number;
  }[];
}

export interface Feat {
  id: number;
  stats?: StatsBase;
  statsId?: number;
  requirement?: Requirement;
  name: string;
  description: string;
  descriptionShort?: string;
  requirementOther?: string; // e.g., "Requires a specific class level"
  translations: {
    id?: number; // optional for updates
    locale: string; // e.g., "en", "fr", "de"
    name: string; // locale: name
    description?: string; // locale: description
    descriptionShort?: string; // locale: descriptionShort
    requirementOther?: string; // e.g., "Requires a specific class level"
  }[];
  source?: string;
  type: FeatType;
  isPassive?: boolean;
  isFighterBonusFeat?: boolean;
  isStackable?: boolean;
}

export type FeatType =
  | "general"
  | "weapon"
  | "proficiency"
  | "skill"
  | "combat"
  | "metamagic"
  | "itemCreation"
  | "other";
