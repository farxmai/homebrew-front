import { AutoStories } from "@mui/icons-material";
import {
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
import HtmlParser from "components/parser/HtmlParser";
import { useLang } from "hooks/useLang";
import React, { useMemo } from "react";
import { Skill } from "types/skill";

export interface SkillViewProps {
  data: Skill;
}

const SkillView: React.FC<SkillViewProps> = ({ data }) => {
  const { t, lang } = useLang();
  const labels = {
    ability: t("skillPage.skillDetails.ability"),
    trainedOnly: t("skillPage.skillDetails.trainedOnly"),
    armorCheckPenalty: t("skillPage.skillDetails.armorCheckPenalty"),
  };

  const enTrans = data?.translations?.find((el) => el.locale === "en");
  const ruTrans = data?.translations?.find((el) => el.locale === "ru");

  const values = useMemo(
    () => ({
      name:
        lang === "en" ? enTrans?.name || data.name : ruTrans?.name || data.name,
      descriptionShort:
        lang === "en"
          ? enTrans?.descriptionShort || data.descriptionShort
          : ruTrans?.descriptionShort || data.descriptionShort,
      description:
        lang === "en"
          ? enTrans?.description || data.description
          : ruTrans?.description || data.description,
      source: data.source,
      ability: t(`abilitiesNames.${data.ability}`),
      trainedOnly: t(`base.${data.trainedOnly ? "yes" : "no"}`),
      armorCheckPenalty: data.armorCheckPenalty || "-",
    }),
    [data, lang, enTrans, ruTrans, t]
  );

  return (
    <Card>
      <Stack spacing={5} direction={"column"}>
        <Stack spacing={5} direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h1">{values.name}</Typography>

          <Chip
            size="small"
            icon={<AutoStories />}
            label={values.source}
            color="secondary"
          />
        </Stack>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 9 }}>
            {values.descriptionShort && (
              <Paper
                elevation={3}
                sx={{ borderLeft: "5px solid #1976d2", padding: 5 }}
              >
                <Typography variant="body2">
                  {values.descriptionShort}
                </Typography>
              </Paper>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Table size="small" sx={{ width: "100%" }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>{labels.ability}</b>
                  </TableCell>
                  <TableCell>{values.ability}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>{labels.trainedOnly}</b>
                  </TableCell>
                  <TableCell>{values.trainedOnly}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>{labels.armorCheckPenalty}</b>
                  </TableCell>
                  <TableCell>{values.armorCheckPenalty}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <HtmlParser html={values.description} />
      </Stack>
    </Card>
  );
};

export default SkillView;
