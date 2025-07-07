import { Ability } from "types";

export interface Skill {
  id: number;
  name: string;
  description: string;
  descriptionShort: string;
  source: string;
  ability: Ability;
  trainedOnly: boolean;
  armorCheckPenalty: number;
}
