import { Button, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { CasinoRounded } from "@mui/icons-material";

export default function DiceFooterApprove({
  total,
  baseTotal = 0,
  criticalModifier = 1,
  rolling,
  rollAll,
  diceCount,
}: {
  total: number;
  baseTotal?: number;
  criticalModifier?: number;
  rolling: boolean;
  rollAll: () => void;
  diceCount: number;
}) {
  const displayTotal = baseTotal
    ? criticalModifier > 1
      ? `(${baseTotal} + ${total}) x ${criticalModifier} = ${
          baseTotal + total * criticalModifier
        }`
      : `${baseTotal} + ${total} = ${baseTotal + total}`
    : String(total);

  return (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "#0f172a",
        color: "common.white",
        borderRadius: 3,
        p: { xs: 2, md: 3 },
      }}
    >
      <Stack direction="column" justifyContent="space-between" spacing={5}>
        <Stack direction="row" alignItems="baseline" spacing={2}>
          <Typography
            variant="h4"
            sx={{ color: "common.white", fontWeight: 800 }}
          >
            {rolling ? "Rolling..." : `Total: ${displayTotal}`}
          </Typography>
        </Stack>

        <Tooltip title={diceCount === 0 ? "Add dice" : "Roll all dice"}>
          <span>
            <Button
              onClick={rollAll}
              disabled={rolling || diceCount === 0}
              variant="contained"
              color="info"
              startIcon={<CasinoRounded />}
              sx={{ borderRadius: 2, px: 2 }}
              fullWidth
            >
              Roll
            </Button>
          </span>
        </Tooltip>
      </Stack>
    </Paper>
  );
}
