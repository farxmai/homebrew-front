import { Alert, AlertTitle } from "@mui/material";
import { useLang } from "hooks/useLang";
import React from "react";

export interface ErrorAlertProps {
  error: string | null;
  status?: number;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error, status }) => {
  const { t } = useLang();
  if (!error) return null;
  return (
    <Alert severity="error" variant="outlined">
      <AlertTitle>
        {t("errors.label")} {status}
      </AlertTitle>
      {error}
    </Alert>
  );
};

export default ErrorAlert;
