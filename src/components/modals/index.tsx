import {
  CheckCircleOutline,
  ErrorOutlineOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { ButtonClose } from "components/buttons";
import React from "react";

export const ModalTitle: React.FC<{ text: string; onClose: () => void }> = ({
  text,
  onClose,
}) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body1" fontWeight={600}>
        {text}
      </Typography>
      <ButtonClose onClick={onClose} sx={{ mr: -5 }} />
    </Stack>
  );
};

export const ModalSubtitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography variant="body2" fontWeight={400}>
      {text}
    </Typography>
  );
};

export const ModalAlert: React.FC<{
  title: string;
  subtitle?: string;
  variant: "success" | "error" | "warning";
}> = ({ title, subtitle, variant }) => {
  const Icon =
    variant === "success"
      ? CheckCircleOutline
      : variant === "error"
      ? ErrorOutlineOutlined
      : WarningAmberOutlined;

  return (
    <Stack
      direction={"column"}
      sx={{ alignItems: "center", gap: 5, textAlign: "center", mb: 5 }}
    >
      <Icon sx={{ width: 40, height: 40 }} color={variant} />
      <Typography variant="body1" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2" fontWeight={400}>
        {subtitle}
      </Typography>
    </Stack>
  );
};

export const ModalContent: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%", padding: "16px 24px" }}
      gap={5}
    >
      {children || null}
    </Stack>
  );
};

export interface ModalProps {
  title: string;
  subtitle?: string;
  open?: boolean;
  onClose?: () => void;
  isLoading?: boolean;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Modal: React.FC<ModalProps> = ({
  title,
  subtitle,
  open = false,
  onClose = () => {},
  isLoading = false,
  maxWidth = "md",
  children,
  actions,
}) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      maxWidth={maxWidth}
      sx={{ overflow: "hidden" }}
      fullWidth
    >
      <DialogTitle id="modal-title">
        <ModalTitle text={title} onClose={onClose} />
        {subtitle && <ModalSubtitle text={subtitle} />}
      </DialogTitle>
      {isLoading && <LinearProgress />}
      {children || null}
      {actions && (
        <DialogActions sx={{ width: "100%", padding: "16px 24px" }}>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {actions}
          </Stack>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
