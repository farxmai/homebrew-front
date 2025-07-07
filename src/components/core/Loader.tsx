import { Box } from "@mui/material";
import DiceIcon from "components/icons/DiceIcon";
import React from "react";

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={{ animation: "opacity  2000ms infinite" }}>
        <Box
          sx={{
            animationName: "spin",
            animationDuration: "1000ms",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <DiceIcon style={{ width: 50, height: 50 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
