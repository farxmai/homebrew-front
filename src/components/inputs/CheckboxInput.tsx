import React from "react";
import {
  Box,
  Checkbox,
  InputLabel,
  SxProps,
  Theme,
  styled,
} from "@mui/material";

export interface CheckboxInputProps {
  label?: string;
  value?: boolean;
  onChange?: (v: boolean) => void;
  min?: number;
  max?: number;
  sx?: SxProps;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  value,
  onChange,
  sx,
}) => {
  return (
    <InputWrapper onClick={() => onChange && onChange(!value)} sx={{ ...sx }}>
      <InputLabel>{label}</InputLabel>
      <Checkbox
        size="small"
        checked={value}
        onChange={(e) => onChange && onChange(e.target.checked)}
        slotProps={{
          input: {
            "aria-label": label || "checkbox input",
            style: { textAlign: "center" },
          },
        }}
      />
    </InputWrapper>
  );
};

export default CheckboxInput;

const InputWrapper = styled(Box)(({ theme }: { theme?: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  ":hover": {
    backgroundColor: theme?.palette.secondary.main,
  },
}));
