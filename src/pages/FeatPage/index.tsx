import { Stack } from "@mui/material";
import Actions from "components/core/Actions";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { Feat } from "types/feat";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";
import FeatView from "./FeatView";
import FeatFormModal from "./FeatFormModal";
import { navigation } from "router/routes";
import { useLang } from "hooks/useLang";

export interface FeatPageProps {}

const FeatPage: React.FC<FeatPageProps> = () => {
  const { t } = useLang();
  const params = useParams();
  const nav = useNavigate();
  const featId = params.id;

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<any>(null);
  const [feat, setFeat] = React.useState<Feat | null>(null);
  const [formOpen, setFormOpen] = React.useState(false);

  React.useEffect(() => {
    if (featId) {
      setLoading(true);
      apiClient
        .get(apiRoutes.feats.byId(featId))
        .then((response) => {
          if (response.status === 200) {
            setFeat(response.data);
          } else {
            setError({
              message: "Failed to fetch feat",
              status: response.status,
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          setError({
            message: err.response.data.message,
            status: err.response?.status || 500,
          });
          setLoading(false);
        });
    }
  }, [featId]);

  const onSubmitFeatUpdate = (data: Feat) => {
    if (featId) {
      apiClient
        .put(apiRoutes.feats.byId(featId), data)
        .then((response) => {
          if (response.status === 200) {
            setFeat(response.data);
            setFormOpen(false);
          } else {
            setError({
              message: "Failed to update feat",
              status: response.status,
            });
          }
        })
        .catch((err) => {
          setError({
            message: err.response.data.message,
            status: err.response?.status || 500,
          });
        });
    }
  };

  const onSubmitFeatDelete = () => {
    if (featId) {
      apiClient
        .delete(apiRoutes.feats.byId(featId))
        .then((response) => {
          if (response.status === 204) {
            setFormOpen(false);
            nav(navigation.getFeats());
          } else {
            setError({
              message: "Failed to delete feat",
              status: response.status,
            });
          }
        })
        .catch((err) => {
          setError({
            message: err.response.data.message,
            status: err.response?.status || 500,
          });
        });
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorAlert error={"Failed to fetch feat"} />;
  if (!feat) return <ErrorAlert error={t("errors.notFound")} />;
  return (
    <Stack spacing={5} direction={"column"} component={"section"}>
      <FeatFormModal
        defaultValues={feat}
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={onSubmitFeatUpdate}
      />
      <Actions
        onDelete={() => onSubmitFeatDelete()}
        onEdit={() => setFormOpen(true)}
      />
      {/* <FeatView data={feat} /> */}
    </Stack>
  );
};

export default FeatPage;
