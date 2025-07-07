import { Button, Grid, MenuItem, TextField } from "@mui/material";
import TextEditor from "components/inputs/TextEditor";
import Modal, { ModalContent } from "components/modals";
import React from "react";
import { Controller, useForm } from "react-hook-form";
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

  const { control, register, handleSubmit, reset } = useForm<
    Record<string, any>
  >({
    defaultValues: {
      name: defaultValues?.name || "",
      ability: defaultValues?.ability || "str",
      trainedOnly: defaultValues?.trainedOnly ? "yes" : "no",
      armorCheckPenalty: defaultValues?.armorCheckPenalty || 0,
      descriptionShort: defaultValues?.descriptionShort || "",
      description: defaultValues?.description || "",
    },
  });

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
          <Button fullWidth onClick={onClose}>
            Cancel
          </Button>
          <Button
            fullWidth
            color="success"
            variant="contained"
            onClick={handleSubmit((data) => {
              onSubmit({
                ...data,
                trainedOnly: data.trainedOnly === "yes",
                armorCheckPenalty: parseInt(data.armorCheckPenalty, 10),
              } as Skill);
              reset();
              onClose();
            })}
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
              label="Skill Name"
              variant="outlined"
              defaultValue={defaultValues?.name || ""}
              placeholder="Enter skill name"
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              label="Base Ability"
              variant="outlined"
              defaultValue={defaultValues?.ability || ""}
              {...register("ability", { required: true })}
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
              label="Trained Only"
              variant="outlined"
              defaultValue={defaultValues?.trainedOnly ? "yes" : "no"}
              {...register("trainedOnly", { required: true })}
              select
            >
              <MenuItem value={"yes"}>Yes</MenuItem>
              <MenuItem value={"no"}>No</MenuItem>
            </TextField>
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              type="number"
              label="Armor Check Penalty"
              variant="outlined"
              defaultValue={defaultValues?.armorCheckPenalty}
              {...register("armorCheckPenalty", { required: true })}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Short Description"
              variant="outlined"
              defaultValue={defaultValues?.descriptionShort || ""}
              placeholder="Enter a short description of the skill"
              {...register("descriptionShort", { required: true })}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextEditor
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </Grid>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default SkillFormModal;
