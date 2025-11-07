import { Button, Grid, MenuItem, Tab, Tabs, TextField } from "@mui/material";
import TextEditor from "components/inputs/TextEditor";
import Modal, { ModalContent } from "components/modals";
import { abilitiesNames } from "constants/abilities";
import { useLang } from "hooks/useLang";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Feat } from "types/feat";

export interface FeatFormModalProps {
  defaultValues?: Feat;
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Feat) => void;
}

const FeatFormModal: React.FC<FeatFormModalProps> = ({
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

  const getDefaultValues = () => {
    return {
      source: defaultValues?.source || "Players Handbook I",
      name: enTrans?.name || "",
      descriptionShort: enTrans?.descriptionShort || "",
      description: enTrans?.description || "",
      requirementOther: enTrans?.requirementOther || "",
      translatedName: ruTrans?.name || "",
      translatedDescriptionShort: ruTrans?.descriptionShort || "",
      translatedDescription: ruTrans?.description || "",
      translatedRequirementOther: ruTrans?.requirementOther || "",
      type: defaultValues?.type || "general",
    };
  };

  const { control, register, handleSubmit, reset } = useForm<
    Record<string, any>
  >({
    defaultValues: getDefaultValues(),
  });

  useEffect(() => {
    if (open && defaultValues) {
      reset(getDefaultValues());
    }
  }, [open, defaultValues, reset, enTrans, ruTrans]);

  const onParseAndSubmit = (data: Record<string, any>) => {
    const payload = {} as Feat;
    // console.log(payload);
    onSubmit(payload);
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      title={
        isEdit ? t("featPage.form.titleEdit") : t("featPage.form.titleCreate")
      }
      subtitle={
        isEdit
          ? t("featPage.form.subtitleEdit")
          : t("featPage.form.subtitleCreate")
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
        {/* <Grid container spacing={5}>
          <Grid size={4}>
            <TextField
              fullWidth
              label={t("featPage.form.fields.ability")}
              variant="outlined"
              defaultValue={defaultValues?.ability || ""}
              {...register("ability", { required: true })}
              select
            >
              {Object.entries(abilitiesNames).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {t(label)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={2}>
            <TextField
              fullWidth
              label={t("featPage.form.fields.trainedOnly")}
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
              label={t("featPage.form.fields.armorCheckPenalty")}
              variant="outlined"
              defaultValue={defaultValues?.armorCheckPenalty}
              {...register("armorCheckPenalty", { required: true })}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              label={t("featPage.form.fields.source")}
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
          <Tab label={t("featPage.form.original")} value={0} />
          <Tab label={t("featPage.form.translation")} value={1} />
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
              label={t("featPage.form.fields.name")}
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
              label={t("featPage.form.fields.descriptionShort")}
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
              label={t("featPage.form.fields.name")}
              variant="outlined"
              {...register("translatedName", { required: true })}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label={t("featPage.form.fields.descriptionShort")}
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
        </Grid> */}
      </ModalContent>
    </Modal>
  );
};

export default FeatFormModal;
