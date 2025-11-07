import Modal from "components/modals";
import React from "react";
import DiceRollerWidget from "./DiceRoller";
import { Box, IconButton } from "@mui/material";
import Dice, { DiceSides } from "components/icons/Dice";
import { DiceType } from "./DiceRoller/diceTypes";

export interface ModalRollerProps {
  title: string;
  dice: DiceType[];
  baseMod?: number;
  diceIconSides?: DiceSides;
  criticalRange?: number; // for d20 only
  criticalModifier?: number; // for d20 only
}

const ModalRoller: React.FC<ModalRollerProps> = ({
  title,
  dice,
  baseMod = 0,
  diceIconSides = 20,
  criticalRange,
  criticalModifier,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)} size="small">
        <Dice width={24} height={24} sides={diceIconSides} />
      </IconButton>
      <Modal title={title} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 3, maxHeight: "80vh", overflowY: "auto" }}>
          <DiceRollerWidget defaultDice={dice} baseTotal={baseMod} autoRoll />
          {/* <AttackDiceRollerWidget
            defaultDice={dice}
            baseTotal={baseMod}
            autoRoll
            criticalRange={criticalRange}
            criticalModifier={criticalModifier}
            attackSequence={{}}
          /> */}
        </Box>
      </Modal>
    </>
  );
};

export default ModalRoller;
