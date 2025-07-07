import { Button, Grid, MenuItem, Stack, TextField } from "@mui/material";
import TextEditor from "components/inputs/TextEditor";
import Modal, { ModalContent } from "components/modals";
import React from "react";
import { Skill } from "types/skill";

export interface SkillFormModalProps {
  defaultValues?: Skill;
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Skill) => void;
}

const SkillFormModal: React.FC<SkillFormModalProps> = ({
  defaultValues,
  open,
  onClose,
  onSubmit,
}) => {
  const isEdit = !!defaultValues;

  const [value, setValue] = React.useState<string>("");

  return (
    <Modal
      open={open}
      title={isEdit ? "Edit Skill" : "Create Skill"}
      subtitle={
        isEdit ? "Update the skill details" : "Fill in the skill details"
      }
      onClose={onClose}
      maxWidth="lg"
      actions={
        <>
          <Button fullWidth>Cancel</Button>
          <Button
            fullWidth
            color="success"
            variant="contained"
            onClick={() => {}}
          >
            {isEdit ? "Save Changes" : "Create Skill"}
          </Button>
        </>
      }
    >
      <ModalContent>
        <Grid container spacing={5}>
          <Grid size={12}>
            <TextField
              fullWidth
              name="name"
              label="Skill Name"
              variant="outlined"
              defaultValue={defaultValues?.name || ""}
              placeholder="Enter skill name"
            />
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              name="ability"
              label="Base Ability"
              variant="outlined"
              defaultValue={defaultValues?.ability || ""}
              select
            >
              <MenuItem value="str">Strength</MenuItem>
              <MenuItem value="dex">Dexterity</MenuItem>
              <MenuItem value="con">Constitution</MenuItem>
              <MenuItem value="int">Intelligence</MenuItem>
              <MenuItem value="wis">Wisdom</MenuItem>
              <MenuItem value="cha">Charisma</MenuItem>
            </TextField>
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              name="trainedOnly"
              label="Trained Only"
              variant="outlined"
              defaultValue={defaultValues?.trainedOnly ? "yes" : "no"}
              select
            >
              <MenuItem value={"yes"}>Yes</MenuItem>
              <MenuItem value={"no"}>No</MenuItem>
            </TextField>
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              name="armorCheckPenalty"
              label="Armor Check Penalty"
              variant="outlined"
              defaultValue={defaultValues?.armorCheckPenalty}
              type="number"
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              name="descriptionShort"
              label="Short Description"
              variant="outlined"
              defaultValue={defaultValues?.descriptionShort || ""}
              placeholder="Enter a short description of the skill"
              multiline
              rows={4}
            />
          </Grid>
          <Grid size={12}>
            <TextEditor />
          </Grid>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default SkillFormModal;
