import {
  ExpandLess,
  ExpandMore,
  HighlightOffOutlined,
} from "@mui/icons-material";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";

export const ButtonClose = (props: IconButtonProps) => {
  return (
    <Tooltip title="Close" placement="top">
      <IconButton
        {...props}
        size={props.size || "small"}
        sx={{
          ...props.sx,
          borderRadius: "50%",
          bgcolor: "#0A0F290A",
        }}
      >
        <HighlightOffOutlined />
      </IconButton>
    </Tooltip>
  );
};

export const ButtonCollapse = (
  props: IconButtonProps & { isCollapsed: boolean }
) => {
  return (
    <Tooltip title="Collapse" placement="top">
      <IconButton
        {...props}
        size={props.size || "small"}
        sx={{
          ...props.sx,
          borderRadius: "50%",
          bgcolor: "#0A0F290A",
        }}
      >
        {props.isCollapsed ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
    </Tooltip>
  );
};
