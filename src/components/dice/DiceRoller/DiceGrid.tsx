import { AnimatePresence, motion } from "framer-motion";
import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import Dice from "components/icons/Dice";
import { DiceType } from "./diceTypes";

export default function DiceGrid({
  dice,
  rolling,
  removeDie = () => {},
  criticalRange = 20,
}: {
  dice: DiceType[];
  rolling: boolean;
  removeDie?: (id: string) => void;
  criticalRange?: number;
}) {
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
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
        columns={10}
        sx={{ minHeight: 500 }}
      >
        <AnimatePresence>
          {dice.map((d) => {
            return (
              <Grid
                size={{
                  xs: 6,
                  sm: 4,
                  md: dice.length <= 10 ? 10 / dice.length : 1,
                }}
                key={d.id}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{
                    type: "tween",
                    stiffness: 260,
                    damping: 20,
                  }}
                  onClick={() => removeDie(d.id)}
                  style={{
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      pt: "100%",
                      bgcolor:
                        d.sides === 20 && !rolling && d.value
                          ? d.value === 20
                            ? "success.main"
                            : d.value >= criticalRange
                            ? "info.main"
                            : d.value === 1
                            ? "error.main"
                            : "none"
                          : "none",
                      borderRadius: 2,
                      maxHeight: 150,
                      transition: "background-color 0.3s ease",
                      "&:hover .hoverable": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box sx={{ position: "absolute", inset: 0 }}>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "grid",
                          placeItems: "center",
                          top:
                            d.sides === 4
                              ? "30%"
                              : d.sides === 6
                              ? "15%"
                              : "5%",
                        }}
                      >
                        <Typography
                          variant="h3"
                          fontWeight={800}
                          sx={{
                            opacity: rolling ? 0 : 1,
                            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            transition: "opacity 0.3s ease",
                          }}
                        >
                          {d.value ?? "?"}
                        </Typography>
                      </Box>

                      <motion.div
                        key={String(d.value)}
                        initial={{
                          rotate: dice.length <= 10 ? 180 : 0,
                          scale: 0.8,
                        }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.2, type: "tween" }}
                      >
                        <Dice
                          sides={d.sides}
                          width="100%"
                          height="100%"
                          color={d.color}
                        />
                      </motion.div>
                    </Box>

                    <Chip
                      label={`d${d.sides}`}
                      size="small"
                      className="hoverable"
                      sx={{
                        position: "absolute",
                        left: 2,
                        bottom: 2,
                        bgcolor: "rgba(0,0,0,0.35)",
                        color: "common.white",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </AnimatePresence>
      </Grid>
    </Paper>
  );
}
