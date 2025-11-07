import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { OptionType } from "types";

export interface FormControlSelectProps {
  label: string;
  control: any;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  validate?: (v: string) => true | string;
  options?: OptionType[];
}

const FormControlSelect: React.FC<FormControlSelectProps> = ({
  control,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  helperText,
  errorText,
  validate,
  options,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel required={required}>{label}</FormLabel>
      <Controller
        name={name}
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
              variant="outlined"
              placeholder={placeholder}
              type={type}
              inputRef={fieldRef}
              value={value ?? ""}
              error={Boolean(errorText)}
              select
              {...props}
              {...fieldProps}
            >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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

export default FormControlSelect;
