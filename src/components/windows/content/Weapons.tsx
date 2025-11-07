import {
  Box,
  capitalize,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { uid } from "utils/helpers";
import ModalRoller from "components/dice/ModalRoller";
import React, { useState } from "react";
import weapons from "constants/mock/weapons";
import Dice from "components/icons/Dice";
import { DiceSides } from "components/dice/DiceRoller/diceTypes";
import { AttackDiceRollerWidget } from "components/dice/DiceRoller";
import ModalAttackRoller from "components/dice/ModalAttackRoller";

export interface WeaponsProps {
  width?: number | string;
  height?: number | string;
}

const Weapons: React.FC<WeaponsProps> = ({ width, height }) => {
  const [list, setList] = useState(weapons);

  return (
    <Table sx={{ border: "none" }} size="small">
      <TableBody>
        {list.map((data) => {
          const [diceCount, diceSides] = data.damage.split("d").map(Number);
          const critRange = data?.critical?.includes("/")
            ? data.critical.split("/")[0]?.split("-").map(Number)[0]
            : 20;
          const critModifier = data?.critical?.includes("/")
            ? Number(data.critical.split("/")[1]?.substring(1))
            : Number(data.critical?.substring(1));

          return (
            <TableRow key={data.id}>
              <Tooltip
                title={
                  <Box sx={{ p: 2, width: 300 }}>
                    <Typography variant="h6" fontWeight={700}>
                      {data.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ my: 4 }}
                    >
                      <i>{data.description}</i>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="h6"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {data.damage.split("/").map((dice) => {
                        const [dicesCount, dicesSides] = dice
                          .split("d")
                          .map(Number);
                        return (
                          <>
                            {Array(dicesCount)
                              .fill(0)
                              .map(() => (
                                <Dice
                                  color={"white"}
                                  sides={dicesSides as DiceSides}
                                  width={24}
                                  height={24}
                                />
                              ))}
                            {`${dicesCount}d${dicesSides}`}
                          </>
                        );
                      })}
                      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                      ({data.critical})
                    </Typography>
                  </Box>
                }
                placement="bottom-start"
                followCursor
              >
                <TableCell sx={{ border: "none" }}>
                  <Typography fontWeight={700}>{data.name}</Typography>
                </TableCell>
              </Tooltip>
              {/* <TableCell sx={{ border: "none" }}>
                {capitalize(data.damageType)} {data.damage} ({data.critical})
              </TableCell> */}

              {/* <TableCell sx={{ border: "none", p: 0, textAlign: "center" }}>
                <ModalRoller
                  title={`Roll ${data.name} Attack Check`}
                  dice={[
                    {
                      id: uid(),
                      sides: 20,
                      value: null,
                    },
                  ]}
                  baseMod={0}
                  criticalRange={critRange}
                />
              </TableCell>
              <TableCell sx={{ border: "none", p: 0, textAlign: "center" }}>
                <ModalRoller
                  diceIconSides={12}
                  title={`Roll ${data.name} Damage Check`}
                  dice={Array(diceCount)
                    .fill(0)
                    .map(() => ({
                      id: uid(),
                      sides: diceSides as 4 | 6 | 8 | 10 | 12 | 20,
                      value: null,
                    }))}
                  baseMod={0}
                  criticalModifier={critModifier}
                />
              </TableCell> */}
              <TableCell sx={{ border: "none", p: 0, textAlign: "center" }}>
                <ModalAttackRoller
                  title={`Roll ${data.name} Attack Check`}
                  attackModifier={2}
                  damageModifier={2}
                  criticalRange={critRange}
                  criticalModifier={critModifier}
                  damageDices={Array(diceCount)
                    .fill(0)
                    .map(() => ({
                      id: uid(),
                      sides: diceSides as 4 | 6 | 8 | 10 | 12 | 20,
                      value: null,
                    }))}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Weapons;
