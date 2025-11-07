import { Button, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { CasinoRounded, Celebration } from "@mui/icons-material";

export default function DiceFooter({
  total,
  baseTotal = 0,
  criticalModifier = 1,
  rolling,
  rollAll,
  diceCount,
  onApproveHit,
  onClose,
  isCritical = false,
}: {
  total: number;
  baseTotal?: number;
  criticalModifier?: number;
  rolling: boolean;
  rollAll: () => void;
  diceCount: number;
  onApproveHit?: () => void;
  onClose?: () => void;
  isCritical?: boolean;
}) {
  const displayTotal = baseTotal
    ? isCritical && criticalModifier > 1
      ? `(${baseTotal} + ${total}) x ${criticalModifier} = ${
          (baseTotal + total) * criticalModifier
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
            {rolling
              ? "Rolling..."
              : `${isCritical ? "Critical Hit!" : "Total"}: ${displayTotal}`}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={5}>
          <Button
            onClick={onClose}
            disabled={rolling || diceCount === 0}
            variant="contained"
            color="error"
            startIcon={<Celebration />}
            sx={{ borderRadius: 2, px: 2 }}
            fullWidth
          >
            Miss!
          </Button>
          <Button
            onClick={onApproveHit}
            disabled={rolling || diceCount === 0}
            variant="contained"
            color="success"
            startIcon={<Celebration />}
            sx={{ borderRadius: 2, px: 2 }}
            fullWidth
          >
            Hit! Lets deal damage
          </Button>
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
              Reroll
            </Button>
          </span>
        </Tooltip>
      </Stack>
    </Paper>
  );
}
