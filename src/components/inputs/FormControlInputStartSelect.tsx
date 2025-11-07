import React from "react";
import {
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { OptionType } from "types";

export interface FormControlInputStartSelectProps {
  control: any;
  label: string;
  inputName: string;
  selectName: string;
  required?: boolean;
  options: OptionType[];
  validate?: (v: string) => true | string;
  errorText?: string;
  helperText?: string;
}

const FormControlInputStartSelect: React.FC<
  FormControlInputStartSelectProps
> = ({
  control,
  label,
  inputName,
  selectName,
  required = false,
  options,
  validate,
  errorText,
  helperText,
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel required={required}>{label}</FormLabel>
      <Controller
        name={inputName}
        control={control}
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
              inputRef={fieldRef}
              value={value ?? ""}
              error={Boolean(errorText)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Controller
                      name={selectName}
                      control={control}
                      rules={{
                        required: {
                          value: required,
                          message: `${label} is required`,
                        },
                      }}
                      render={({
                        field: {
                          ref: fieldRef,
                          value,
                          onChange,
                          ...selectProps
                        },
                      }) => (
                        <Select
                          variant="standard"
                          disableUnderline
                          value={value}
                          onChange={onChange}
                          {...selectProps}
                        >
                          {options?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </InputAdornment>
                ),
              }}
              {...fieldProps}
            />
            {(errorText || helperText) && (
              <FormHelperText error={Boolean(errorText)}>
                {errorText || helperText}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default FormControlInputStartSelect;
