import { InfoOutlined } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export interface FormControlInputProps {
  label: string;
  control: any;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  validate?: (v: string) => true | string;
  disabled?: boolean;
}

const FormControlInput: React.FC<FormControlInputProps> = ({
  control,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  helperText,
  errorText,
  validate,
  disabled = false,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel required={required}>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        disabled={disabled}
        rules={{
          required: {
            value: required,
            message: `${label} is required`,
          },
          validate: validate,
        }}
        render={({ field: { ref: fieldRef, value, ...fieldProps } }) => (
          <>
            <TextField
              variant="outlined"
              placeholder={placeholder}
              type={type}
              inputRef={fieldRef}
              value={value ?? ""}
              error={Boolean(errorText)}
              {...props}
              {...fieldProps}
            />
            {(errorText || helperText) && (
              <FormHelperText error={Boolean(errorText)}>
                <InfoOutlined />
                {errorText || helperText}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default FormControlInput;
