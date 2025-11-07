import { t } from "i18next";
import { OptionType } from "types";
import { FeatType } from "types/feat";

export const featTypes: Record<FeatType, string> = {
  general: t(`featTypes.general`),
  weapon: t(`featTypes.weapon`),
  proficiency: t(`featTypes.proficiency`),
  skill: t(`featTypes.skill`),
  combat: t(`featTypes.combat`),
  metamagic: t(`featTypes.metamagic`),
  itemCreation: t(`featTypes.itemCreation`),
  other: t(`featTypes.other`),
};

export const featTypeOptions: OptionType[] = [
  { value: "weapon", label: featTypes.weapon, Icon: null },
  { value: "proficiency", label: featTypes.proficiency, Icon: null },
  { value: "skill", label: featTypes.skill, Icon: null },
  { value: "combat", label: featTypes.combat, Icon: null },
  { value: "metamagic", label: featTypes.metamagic, Icon: null },
  { value: "itemCreation", label: featTypes.itemCreation, Icon: null },
  { value: "other", label: featTypes.other, Icon: null },
];
