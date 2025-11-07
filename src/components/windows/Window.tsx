import { Box, Card, Divider, Typography } from "@mui/material";
import { ButtonClose, ButtonCollapse } from "components/buttons";
import React, { useEffect } from "react";
import { Rnd } from "react-rnd";

export type WindowType = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  title: string;
  enableResizing?: boolean;
  minWidth: number;
  minHeight: number;
  maxWidth?: number;
  maxHeight?: number;
};

export interface WindowProps {
  window: WindowType;
  setWindows: (callback: (windows: WindowType[]) => WindowType[]) => void;
  bringToFront: (id: string) => void;
  children?: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  window,
  setWindows,
  bringToFront,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
    setWindows((ws) =>
      ws.map((x: WindowType) =>
        x.id === window.id
          ? {
              ...x,
              h: isCollapsed ? x?.minHeight || 200 : 40,
            }
          : x
      )
    );
  };

  useEffect(() => {
    if (window.h <= 40) {
      setIsCollapsed(true);
    }
  }, [window.h]);

  return (
    <Rnd
      key={window.id}
      bounds="parent"
      maxHeight={window.maxHeight}
      maxWidth={window.maxWidth}
      minWidth={window.minWidth}
      minHeight={40}
      enableResizing={window.enableResizing && !isCollapsed}
      size={{ width: window.w, height: window.h }}
      position={{ x: window.x, y: window.y }}
      onDragStart={() => bringToFront(window.id)}
      onResizeStart={() => bringToFront(window.id)}
      onDragStop={(_, d) =>
        setWindows((ws) =>
          ws.map((x: WindowType) =>
            x.id === window.id ? { ...x, x: d.x, y: d.y } : x
          )
        )
      }
      onResizeStop={(_, __, ref, ___, pos) =>
        setWindows((ws) =>
          ws.map((x: WindowType) =>
            x.id === window.id
              ? {
                  ...x,
                  w: ref.offsetWidth,
                  h: ref.offsetHeight,
                  x: pos.x,
                  y: pos.y,
                }
              : x
          )
        )
      }
      dragHandleClassName="titlebar"
      style={{ zIndex: window.z }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          p: 0,
        }}
        onClick={() => {
          bringToFront(window.id);
        }}
      >
        <Box
          className="titlebar"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
            pl: 3,
            bgcolor: (t) => t.palette.primary.main,
            cursor: "move",
            maxHeight: 40,
          }}
        >
          <Typography variant="h6">{window.title}</Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <ButtonCollapse
              isCollapsed={isCollapsed}
              onClick={handleCollapseToggle}
            />
            <ButtonClose
              onClick={() =>
                setWindows((ws) => ws.filter((w) => w.id !== window.id))
              }
            />
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            p: 0,
            height: "calc(100% - 40px)",
            display: isCollapsed ? "none" : "block",
          }}
        >
          {children}
        </Box>
      </Card>
    </Rnd>
  );
};

export default Window;
