import { AutoStories } from "@mui/icons-material";
import {
  Box,
  Card,
  Chip,
  Grid,
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
import DOMPurify from "dompurify";

export interface SkillViewProps {
  data: Skill;
}

const SkillView: React.FC<SkillViewProps> = ({ data }) => {
  const cleanHtml = DOMPurify.sanitize(data.description);
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
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 9 }}>
            {data.descriptionShort && (
              <Paper
                elevation={3}
                sx={{ borderLeft: "5px solid #1976d2", padding: 5 }}
              >
                <Typography variant="body2">{data.descriptionShort}</Typography>
              </Paper>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Table size="small" sx={{ width: "100%" }}>
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
          </Grid>
        </Grid>

        <div
          className="rawText"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      </Stack>
    </Card>
  );
};

export default SkillView;
