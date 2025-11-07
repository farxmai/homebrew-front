import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import { uid } from "utils/helpers";
import ModalRoller from "components/dice/ModalRoller";
import { skillsMock } from "constants/mock/skills";
import React from "react";

export interface SkillsProps {
  width?: number | string;
  height?: number | string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const Skills: React.FC<SkillsProps> = ({ width, height }) => {
  const rows = skillsMock.map((skill) => ({
    ...skill,
    totalMod:
      skill.attributeMod +
      skill.rank +
      skill.featMod +
      skill.itemsMod +
      skill.synergyMod +
      skill.penaltyMod +
      skill.tempMod,
  }));
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] =
    React.useState<keyof (typeof rows)[0]>("totalMod");

  const visibleRows = React.useMemo(
    () => [...rows].sort(getComparator(order, orderBy)),
    [order, orderBy]
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof (typeof rows)[0]
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler =
    (property: keyof (typeof rows)[0]) =>
    (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableContainer sx={{ height: height, overflowY: "auto" }}>
      <Table sx={{ border: "none" }} size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ border: "none" }}
              sortDirection={orderBy === "name" ? order : false}
            >
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={createSortHandler("name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell
              sx={{ border: "none", width: 40, textAlign: "center" }}
              sortDirection={orderBy === "attribute" ? order : false}
            >
              <TableSortLabel
                active={orderBy === "attribute"}
                direction={orderBy === "attribute" ? order : "asc"}
                onClick={createSortHandler("attribute")}
              >
                Attr.
              </TableSortLabel>
            </TableCell>
            <TableCell
              sx={{ border: "none", width: 40, textAlign: "center" }}
              sortDirection={orderBy === "rank" ? order : false}
            >
              <TableSortLabel
                active={orderBy === "rank"}
                direction={orderBy === "rank" ? order : "asc"}
                onClick={createSortHandler("rank")}
              >
                Rank
              </TableSortLabel>
            </TableCell>
            <TableCell
              sx={{ border: "none", width: 40, textAlign: "center" }}
              sortDirection={orderBy === "totalMod" ? order : false}
            >
              <TableSortLabel
                active={orderBy === "totalMod"}
                direction={orderBy === "totalMod" ? order : "asc"}
                onClick={createSortHandler("totalMod")}
              >
                Mod
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ border: "none" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((skill) => {
            const modifier = skill.totalMod;
            return (
              <TableRow key={skill.name}>
                <TableCell sx={{ border: "none" }}>{skill.name}</TableCell>
                <TableCell
                  sx={{ border: "none", width: 40, textAlign: "center" }}
                >
                  {skill.attribute.toLowerCase()}
                </TableCell>
                <TableCell
                  sx={{ border: "none", width: 40, textAlign: "center" }}
                >
                  {skill.rank}
                </TableCell>
                <Tooltip
                  placement="left"
                  title={
                    <Typography
                      sx={{ whiteSpace: "pre-line" }}
                    >{`Attribute: ${skill.attribute.toUpperCase()}
                    Rank: ${skill.rank}
                    Attr Mod: ${skill.attributeMod}
                    Feat Mod: ${skill.featMod}
                    Items Mod: ${skill.itemsMod}
                    Synergy Mod: ${skill.synergyMod}
                    Penalty Mod: ${skill.penaltyMod}
                    Temp Mod: ${skill.tempMod}`}</Typography>
                  }
                  arrow
                >
                  <TableCell
                    sx={{
                      border: "none",
                      textAlign: "center",
                      width: 40,
                      fontWeight: "bold",
                      bgcolor: "#f0f0f05A",
                      fontSize: 18,
                      cursor: "help",
                      p: 0,
                    }}
                  >
                    {modifier >= 0 ? `+${modifier}` : modifier}
                  </TableCell>
                </Tooltip>
                <TableCell sx={{ border: "none", p: 0, textAlign: "center" }}>
                  <ModalRoller
                    title={`Roll ${skill.name} Check`}
                    dice={[{ id: uid(), sides: 20, value: null }]}
                    baseMod={modifier}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Skills;
