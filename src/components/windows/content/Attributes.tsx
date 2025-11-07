import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { uid } from "utils/helpers";
import ModalRoller from "components/dice/ModalRoller";
import attributes, { mockAttributesValues } from "constants/mock/attributes";
import React from "react";

export interface AttributesProps {}

const Attributes: React.FC<AttributesProps> = ({}) => {
  const getModifier = (value: number) => {
    return Math.floor((value - 10) / 2);
  };

  return (
    <Table sx={{ border: "none" }}>
      <TableBody>
        {attributes.map((attr) => {
          const modifier = getModifier(mockAttributesValues[attr.id]);
          return (
            <TableRow key={attr.name}>
              <TableCell sx={{ border: "none" }}>
                <Typography fontWeight={700}>{attr.name}</Typography>
              </TableCell>
              <TableCell
                sx={{ border: "none", width: 40, textAlign: "center" }}
              >
                {mockAttributesValues[attr.id]}
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                  textAlign: "center",
                  width: 40,
                  fontWeight: "bold",
                  bgcolor: "#f0f0f05A",
                  fontSize: 18,
                  p: 0,
                }}
              >
                {modifier >= 0 ? `+${modifier}` : modifier}
              </TableCell>
              <TableCell sx={{ border: "none", p: 0, textAlign: "center" }}>
                <ModalRoller
                  title={`Roll ${attr.name} Check`}
                  dice={[{ id: uid(), sides: 20, value: null }]}
                  baseMod={modifier}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Attributes;
