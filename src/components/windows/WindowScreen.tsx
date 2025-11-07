import React, { use, useEffect, useState } from "react";
import Window, { WindowType } from "./Window";
import { Box } from "@mui/material";
import Attributes from "./content/Attributes";
import DiceRollerWidget from "components/dice/DiceRoller";
import { uid } from "utils/helpers";
import Skills from "./content/Skills";
import Weapons from "./content/Weapons";

export interface WindowScreenProps {
  defaultWindows?: WindowType[];
}

const WindowScreen: React.FC<WindowScreenProps> = ({ defaultWindows }) => {
  const [wins, setWins] = useState<WindowType[]>(
    defaultWindows || [
      {
        id: "skills",
        x: 1070,
        y: 0,
        w: 412,
        h: 1183,
        z: 1,
        title: "Skills",
        enableResizing: true,
        minHeight: 314,
        minWidth: 187,
      },
      {
        id: "attributes",
        x: 0,
        y: 0,
        w: 238,
        h: 329,
        z: 2,
        title: "Attributes",
        enableResizing: true,
        minHeight: 314,
        minWidth: 187,
      },
      {
        id: "weapons",
        x: 0,
        y: 0,
        w: 238,
        h: 329,
        z: 2,
        title: "Weapons",
        enableResizing: true,
        minHeight: 314,
        minWidth: 187,
      },
    ]
  );

  useEffect(() => {
    console.log("Windows:", wins);
  }, [wins]);

  const bringToFront = (id: string) =>
    setWins((ws) => {
      const maxZ = Math.max(...ws.map((w) => w.z));
      return ws
        .map((w) => (w.id === id ? { ...w, z: maxZ + 1 } : w))
        .sort((a, b) => a.z - b.z)
        .map((w, i) => ({ ...w, z: i + 1 }));
    });

  const getWindowContent = (id: string, window: WindowType) => {
    switch (id) {
      case "attributes":
        return <Attributes />;
      case "skills":
        return <Skills width={window.w} height={window.h - 50} />;
      case "weapons":
        return <Weapons width={window.w} height={window.h - 50} />;
      default:
        return (
          <DiceRollerWidget
            baseTotal={12}
            defaultDice={[
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "melee",
                color: "grey",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "melee",
                color: "grey",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "melee",
                color: "grey",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "fire",
                color: "orange",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "fire",
                color: "orange",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "smite",
                color: "yellow",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "smite",
                color: "yellow",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "smite",
                color: "yellow",
              },
              {
                id: uid(),
                sides: 6,
                value: null,
                group: "smite",
                color: "yellow",
              },
            ]}
          />
        );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {wins.map((w) => (
        <Window
          key={w.id}
          window={w}
          setWindows={setWins}
          bringToFront={bringToFront}
        >
          {getWindowContent(w.id, w)}
        </Window>
      ))}
    </Box>
  );
};

export default WindowScreen;
