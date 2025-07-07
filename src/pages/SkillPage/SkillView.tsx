import { AutoStories } from "@mui/icons-material";
import {
  Card,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { abilitiesNames } from "constants/abilities";
import React from "react";
import { Skill } from "types/skill";

export interface SkillViewProps {
  data: Skill;
}

const SkillView: React.FC<SkillViewProps> = ({ data }) => {
  return (
    <Card>
      <Stack spacing={5} direction={"column"}>
        <Stack spacing={5} direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h1">{data.name}</Typography>

          <Chip
            size="small"
            icon={<AutoStories />}
            label={data.source}
            color="secondary"
          />
        </Stack>
        {data.descriptionShort && (
          <Paper
            elevation={3}
            sx={{ borderLeft: "5px solid #1976d2", padding: 5 }}
          >
            <Typography variant="body2">{data.descriptionShort}</Typography>
          </Paper>
        )}

        <Stack spacing={5} direction={"row"} justifyContent={"space-between"}>
          <Typography variant="body1">{data.description}</Typography>
          <Table size="small" sx={{ maxWidth: 200 }}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <b>Ability</b>
                </TableCell>
                <TableCell>{abilitiesNames[data.ability]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Trained Only</b>
                </TableCell>
                <TableCell>{data.trainedOnly ? "Yes" : "No"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Armor Penalty</b>
                </TableCell>
                <TableCell>{data.armorCheckPenalty || "-"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SkillView;
