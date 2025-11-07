import { t } from "i18next";
import { Ability, OptionType } from "types";

export const abilitiesNames: Record<Ability, string> = {
  str: t(`abilitiesNames.str`),
  dex: t(`abilitiesNames.dex`),
  con: t(`abilitiesNames.con`),
  int: t(`abilitiesNames.int`),
  wis: t(`abilitiesNames.wis`),
  cha: t(`abilitiesNames.cha`),
};

export const abilitiesOptions: OptionType[] = [
  { value: "str", label: abilitiesNames.str, Icon: null },
  { value: "dex", label: abilitiesNames.dex, Icon: null },
  { value: "con", label: abilitiesNames.con, Icon: null },
  { value: "int", label: abilitiesNames.int, Icon: null },
  { value: "wis", label: abilitiesNames.wis, Icon: null },
  { value: "cha", label: abilitiesNames.cha, Icon: null },
];
