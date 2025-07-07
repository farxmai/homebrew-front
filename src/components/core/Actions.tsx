import {
  ArrowCircleLeftOutlined,
  Delete,
  Edit,
  PlaylistAdd,
} from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, Stack, Tooltip } from "@mui/material";
import Modal, { ModalAlert } from "components/modals";
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
  const nav = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  return (
    <Card>
      <Modal
        title="Delete Confirmation"
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
              Cancel
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
              Delete
            </Button>
          </>
        }
      >
        <ModalAlert
          title="Are you sure you want tot delete it?"
          subtitle="This action cannot be undone."
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
            Go Back
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
