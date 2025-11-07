import {
  Box,
  Button,
  Divider,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Dice from "components/icons/Dice";
import { CleaningServicesRounded, Delete } from "@mui/icons-material";
import { DICE, DiceType } from "./diceTypes";

export default function DiceHeader({
  dice,
  addDie,
  clearAll,
  removeAll,
}: {
  dice: DiceType[];
  addDie: (sides: DiceType["sides"]) => void;
  clearAll: () => void;
  removeAll: () => void;
}) {
  return (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "#0f172a",
        color: "common.white",
        borderRadius: 3,
        p: { xs: 2, md: 3 },
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {DICE.map((s) => (
          <Button
            key={s}
            size="small"
            variant="contained"
            onClick={() => addDie(s)}
            sx={{ textTransform: "none" }}
            startIcon={<Dice sides={s} width={20} height={20} />}
          >
            d{s}
          </Button>
        ))}

        <Tooltip title="Clear all values">
          <span>
            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={clearAll}
              startIcon={<CleaningServicesRounded />}
            >
              C
            </Button>
          </span>
        </Tooltip>

        <Tooltip title="Remove all dices">
          <span>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={removeAll}
              startIcon={<Delete />}
            >
              D
            </Button>
          </span>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.7)", alignSelf: "center" }}
        >
          {dice.length > 0
            ? Object.entries(
                dice.reduce((obj: any, d) => {
                  d.group
                    ? (obj[d.group] = (obj[d.group] || 0) + 1)
                    : (obj["d" + d.sides] = (obj["d" + d.sides] || 0) + 1);
                  return obj;
                }, {} as Record<string, number>)
              )
                .map(([group, count]) => `${count}${group} `)
                .join(", ")
            : "No dice rolled"}
        </Typography>
      </Box>
    </Paper>
  );
}
