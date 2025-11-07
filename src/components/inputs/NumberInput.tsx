import React from "react";
import {
  Box,
  InputLabel,
  styled,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";

import { useFocus } from "hooks/useFocus";

export interface NumberInputProps {
  label?: string;
  value?: string | number;
  onChange?: (v: string) => void;
  min?: number;
  max?: number;
  sx?: SxProps;
  fullWidth?: boolean;
  withPadding?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 9999,
  fullWidth = false,
  withPadding = true,
  sx,
}) => {
  const [inputRef, setInputFocus] = useFocus();
  return (
    <InputWrapper onClick={() => setInputFocus()} sx={{ ...sx }}>
      {label && <InputLabel>{label}</InputLabel>}
      <TextField
        inputRef={inputRef}
        slotProps={{
          htmlInput: {
            "aria-label": label || "number input",
            inputMode: "numeric",
            style: { textAlign: "center" },
            min: 0,
            max: 999,
          },
        }}
        sx={{
          maxWidth: fullWidth ? "100%" : 12 * String(max).length,
          input: withPadding ? { padding: 0 } : {},
          ...sx,
        }}
        type="number"
        variant="standard"
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          const reg = new RegExp(`^[0-9]{0,${String(max).length}}$`);
          if (onChange && reg.test(e.target.value)) {
            if (+value >= max) onChange(String(max));
            else if (+value <= min) onChange(String(min));
            else onChange(e.target.value);
          }
        }}
      />
    </InputWrapper>
  );
};

export default NumberInput;

const InputWrapper = styled(Box)(({ theme }: { theme?: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
