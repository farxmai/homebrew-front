import Modal from "components/modals";
import React from "react";
import { AttackDiceRollerWidget } from "./DiceRoller";
import { Box, IconButton } from "@mui/material";
import Dice from "components/icons/Dice";
import { DiceType } from "./DiceRoller/diceTypes";

export interface ModalAttackRollerProps {
  title: string;
  attackModifier: number;
  damageModifier?: number;
  criticalRange: number;
  criticalModifier: number;
  damageDices: DiceType[];
}

const ModalAttackRoller: React.FC<ModalAttackRollerProps> = ({
  title,
  attackModifier,
  damageModifier,
  criticalRange,
  criticalModifier,
  damageDices,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)} size="small">
        <Dice width={24} height={24} sides={20} />
      </IconButton>
      <Modal title={title} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 3, maxHeight: "80vh", overflowY: "auto" }}>
          <AttackDiceRollerWidget
            autoRoll
            attackModifier={attackModifier}
            damageModifier={damageModifier}
            criticalRange={criticalRange}
            criticalModifier={criticalModifier}
            damageDices={damageDices}
            onClose={() => setOpen(false)}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ModalAttackRoller;
