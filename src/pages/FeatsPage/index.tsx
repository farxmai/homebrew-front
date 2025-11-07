import { Card, Stack, Tooltip, Typography } from "@mui/material";
import Actions from "components/core/Actions";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import { useLang } from "hooks/useLang";
// import FeatFormModal from "pages/FeatPage/FeatFormModal";
import React from "react";
import { Link, useNavigate } from "react-router";
import { navigation } from "router/routes";
import { Feat } from "types/feat";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";

export interface FeatsPageProps {}

const FeatsPage: React.FC<FeatsPageProps> = () => {
  const { t, lang } = useLang();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [feats, setFeats] = React.useState<Feat[]>([]);
  const [formOpen, setFormOpen] = React.useState(false);

  const navigate = useNavigate();

  const renderFeats = feats.map((feat) => ({
    id: feat.id,
    name:
      feat.translations?.find((trans) => trans.locale === lang)?.name ||
      feat.id,
    descriptionShort:
      feat.translations?.find((trans) => trans.locale === lang)
        ?.descriptionShort || feat.id,
  }));

  React.useEffect(() => {
    setLoading(true);
    apiClient
      .get(apiRoutes.feats.base)
      .then((response) => {
        if (response.status === 200) {
          setFeats(response.data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching feats:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const onSubmitFeatCreate = (data: Feat) => {
    apiClient
      .post(apiRoutes.feats.base, data)
      .then((response) => {
        if (response.status === 200 && response.data.id) {
          navigate(navigation.getFeat(response.data.id));
          setFormOpen(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error updating feat:", err);
        setError(true);
      });
  };

  if (loading) return <Loader />;
  if (error) return <ErrorAlert error={"Failed to fetch feats"} />;
  return (
    <Stack spacing={5} direction={"column"} component={"section"}>
      <Actions onAdd={() => setFormOpen(true)} />
      {/* <FeatFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={onSubmitFeatCreate}
      /> */}
      <Card>
        <Typography variant="h1">{t("featsPage.title")}</Typography>
        <Typography variant="body1">{t("featsPage.description")}</Typography>
        <ul>
          {renderFeats.map((feat) => (
            <li key={feat.id}>
              <Tooltip title={feat.descriptionShort} placement="right-start">
                <Link to={`${navigation.getFeat(feat.id)}`}>{feat.name}</Link>
              </Tooltip>
            </li>
          ))}
        </ul>
      </Card>
    </Stack>
  );
};

export default FeatsPage;
