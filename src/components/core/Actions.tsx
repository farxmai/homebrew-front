import {
  ArrowCircleLeftOutlined,
  Delete,
  Edit,
  PlaylistAdd,
} from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, Stack, Tooltip } from "@mui/material";
import Modal, { ModalAlert } from "components/modals";
import { useLang } from "hooks/useLang";
import React from "react";
import { useNavigate } from "react-router";

export interface ActionsProps {
  withBack?: boolean;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Actions: React.FC<ActionsProps> = ({
  withBack = true,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const { t } = useLang();
  const nav = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  return (
    <Card>
      <Modal
        title={t("modals.delete.title")}
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        maxWidth="sm"
        actions={
          <>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={() => setDeleteModalOpen(false)}
            >
              {t("buttons.cancel")}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={() => {
                if (onDelete) {
                  onDelete();
                }
                setDeleteModalOpen(false);
              }}
            >
              {t("buttons.delete")}
            </Button>
          </>
        }
      >
        <ModalAlert
          title={t("modals.delete.title")}
          subtitle={t("modals.delete.subtitle")}
          variant="error"
        />
      </Modal>
      <Stack spacing={5} direction={"row"} justifyContent={"space-between"}>
        {withBack ? (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<ArrowCircleLeftOutlined />}
            onClick={() => nav(-1)}
          >
            {t("buttons.back")}
          </Button>
        ) : (
          <Box />
        )}
        <ButtonGroup variant="outlined" size="small">
          {onAdd && (
            <Tooltip title="Add New Item" placement="top">
              <Button color="success" onClick={onAdd}>
                <PlaylistAdd sx={{ width: 14, height: 14 }} />
              </Button>
            </Tooltip>
          )}
          {onEdit && (
            <Tooltip title="Edit Item" placement="top">
              <Button color="warning" onClick={onEdit}>
                <Edit sx={{ width: 14, height: 14 }} />
              </Button>
            </Tooltip>
          )}
          {onDelete && (
            <Tooltip title="Remove Item" placement="top">
              <Button color="error" onClick={() => setDeleteModalOpen(true)}>
                <Delete sx={{ width: 14, height: 14 }} />
              </Button>
            </Tooltip>
          )}
        </ButtonGroup>
      </Stack>
    </Card>
  );
};

export default Actions;
