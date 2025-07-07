import { Alert, AlertTitle } from "@mui/material";
import React from "react";

export interface ErrorAlertProps {
  error: string | null;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  if (!error) return null;
  return (
    <Alert severity="error" variant="outlined">
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
};

export default ErrorAlert;
