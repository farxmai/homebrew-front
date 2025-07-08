import { Button, Grid, MenuItem, Tab, Tabs, TextField } from "@mui/material";
import TextEditor from "components/inputs/TextEditor";
import Modal, { ModalContent } from "components/modals";
import { abilitiesNames } from "constants/abilities";
import { useLang } from "hooks/useLang";
import React, { useEffect } from "react";
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
  const { t } = useLang();
  const isEdit = !!defaultValues;
  const [translationTab, setTranslationTab] = React.useState(0);

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTranslationTab(newValue);
  };

  const enTrans = defaultValues?.translations?.find((el) => el.locale === "en");
  const ruTrans = defaultValues?.translations?.find((el) => el.locale === "ru");

  const { control, register, handleSubmit, reset } = useForm<
    Record<string, any>
  >({
    defaultValues: {
      ability: defaultValues?.ability || "str",
      trainedOnly: defaultValues?.trainedOnly ? "yes" : "no",
      armorCheckPenalty: defaultValues?.armorCheckPenalty || 0,
      source: defaultValues?.source || "Players Handbook I",
      name: enTrans?.name || "",
      descriptionShort: enTrans?.descriptionShort || "",
      description: enTrans?.description || "",
      translatedName: ruTrans?.name || "",
      translatedDescriptionShort: ruTrans?.descriptionShort || "",
      translatedDescription: ruTrans?.description || "",
    },
  });

  useEffect(() => {
    if (open && defaultValues) {
      reset({
        ability: defaultValues.ability || "str",
        trainedOnly: defaultValues.trainedOnly ? "yes" : "no",
        armorCheckPenalty: defaultValues.armorCheckPenalty || 0,
        source: defaultValues.source || "Players Handbook I",
        name: enTrans?.name || "",
        descriptionShort: enTrans?.descriptionShort || "",
        description: enTrans?.description || "",
        translatedName: ruTrans?.name || "",
        translatedDescriptionShort: ruTrans?.descriptionShort || "",
        translatedDescription: ruTrans?.description || "",
      });
    }
  }, [open, defaultValues, reset, enTrans, ruTrans]);

  const onParseAndSubmit = (data: Record<string, any>) => {
    const payload = {
      name: data.name,
      description: data.description,
      descriptionShort: data.descriptionShort,
      source: data.source,
      ability: data.ability,
      trainedOnly: data.trainedOnly === "yes",
      armorCheckPenalty: parseInt(data.armorCheckPenalty, 10),
      translations: [
        {
          ...(enTrans?.id ? { id: enTrans.id } : {}),
          locale: "en",
          name: data.name,
          description: data.description,
          descriptionShort: data.descriptionShort,
        },
        {
          ...(ruTrans?.id ? { id: ruTrans.id } : {}),
          locale: "ru",
          name: data.translatedName,
          description: data.translatedDescription,
          descriptionShort: data.translatedDescriptionShort,
        },
      ],
    } as Skill;
    // console.log(payload);
    onSubmit(payload);
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      title={
        isEdit ? t("skillPage.form.titleEdit") : t("skillPage.form.titleCreate")
      }
      subtitle={
        isEdit
          ? t("skillPage.form.subtitleEdit")
          : t("skillPage.form.subtitleCreate")
      }
      onClose={onClose}
      maxWidth="lg"
      actions={
        <>
          <Button fullWidth onClick={onClose}>
            {t("buttons.cancel")}
          </Button>
          <Button
            fullWidth
            color="success"
            variant="contained"
            onClick={handleSubmit(onParseAndSubmit)}
          >
            {t("buttons.save")}
          </Button>
        </>
      }
    >
      <ModalContent>
        <Grid container spacing={5}>
          <Grid size={4}>
            <TextField
              fullWidth
              label={t("skillPage.form.fields.ability")}
              variant="outlined"
              defaultValue={defaultValues?.ability || ""}
              {...register("ability", { required: true })}
              select
            >
              {Object.entries(abilitiesNames).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {t(`abilitiesNames.${value}`)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={2}>
            <TextField
              fullWidth
              label={t("skillPage.form.fields.trainedOnly")}
              variant="outlined"
              defaultValue={defaultValues?.trainedOnly ? "yes" : "no"}
              {...register("trainedOnly", { required: true })}
              select
            >
              <MenuItem value={"yes"}>{t("base.yes")}</MenuItem>
              <MenuItem value={"no"}>{t("base.no")}</MenuItem>
            </TextField>
          </Grid>
          <Grid size={2}>
            <TextField
              fullWidth
              type="number"
              label={t("skillPage.form.fields.armorCheckPenalty")}
              variant="outlined"
              defaultValue={defaultValues?.armorCheckPenalty}
              {...register("armorCheckPenalty", { required: true })}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              label={t("skillPage.form.fields.source")}
              variant="outlined"
              defaultValue={defaultValues?.source}
              {...register("source", { required: true })}
              select
            >
              <MenuItem value="Players Handbook I">Players Handbook I</MenuItem>
              <MenuItem value="Players Handbook II">
                Players Handbook II
              </MenuItem>
              <MenuItem value="Homebrew">Homebrew</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Tabs
          value={translationTab}
          onChange={onTabChange}
          aria-label="translation tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label={t("skillPage.form.original")} value={0} />
          <Tab label={t("skillPage.form.translation")} value={1} />
        </Tabs>

        <Grid
          container
          spacing={5}
          sx={{ display: translationTab === 0 ? "flex" : "none" }}
        >
          <Grid size={12}>
            <TextField
              id="name"
              fullWidth
              label={t("skillPage.form.fields.name")}
              variant="outlined"
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="descriptionShort"
              fullWidth
              multiline
              rows={4}
              label={t("skillPage.form.fields.descriptionShort")}
              variant="outlined"
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

        <Grid
          container
          spacing={5}
          sx={{ display: translationTab === 1 ? "flex" : "none" }}
        >
          <Grid size={12}>
            <TextField
              fullWidth
              label={t("skillPage.form.fields.name")}
              variant="outlined"
              {...register("translatedName", { required: true })}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label={t("skillPage.form.fields.descriptionShort")}
              variant="outlined"
              {...register("translatedDescriptionShort", {
                required: true,
              })}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="translatedDescription"
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
