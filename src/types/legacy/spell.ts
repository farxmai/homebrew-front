export interface Spell {
  id: string; // Unique ID for the spell (e.g., "fireball", "magic_missile")
  name: string;
  description: string;
  shortDescription: string;
  school: string[]; // e.g., "evocation", "illusion"
  subSchool?: string[] | null; // Creation, Healing, etc.
  descriptor?: string[] | null; // e.g., "fire", "cold"
  castingTime?: string; // e.g., "1 standard action", "1 round"
  spellRange?: {
    fixed: number; // in cells
    variable: number; // e.g., 2 cells
    perLvlCount: number; // e.g., per 1 levels
    touch: boolean; // e.g., touch, personal, etc.
  };
  target: string; // e.g., "1 creature", "20 ft. radius"
  duration: string; // e.g., "1 round/level", "instantaneous"
  savingThrow: string; // e.g., "Fortitude half", "Reflex negates"
  spellResistance?: boolean; // e.g., "yes", "no"
  concentration?: boolean; // e.g., "yes", "no"
  materialComponents: string;
  focusComponent: string;
  components: {
    XP: number; // e.g., 1000 XP
    S: boolean; // somatic component
    V: boolean; // verbal component
    M: boolean; // material component
    DF: boolean; // divine focus
    F: boolean; // focus component
  };
}
