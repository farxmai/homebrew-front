import { Stack } from "@mui/material";
import Actions from "components/core/Actions";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { Skill } from "types/skill";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";
import SkillView from "./SkillView";
import SkillFormModal from "./SkillFormModal";
import { navigation } from "router/routes";

export interface SkillPageProps {}

const SkillPage: React.FC<SkillPageProps> = () => {
  const params = useParams();
  const nav = useNavigate();
  const skillId = params.id;

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [skill, setSkill] = React.useState<Skill | null>(null);
  const [formOpen, setFormOpen] = React.useState(false);

  React.useEffect(() => {
    if (skillId) {
      setLoading(true);
      apiClient
        .get(apiRoutes.skills.byId(skillId))
        .then((response) => {
          if (response.status === 200) {
            setSkill(response.data);
          } else {
            setError(true);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching skills:", err);
          setError(true);
          setLoading(false);
        });
    }
  }, [skillId]);

  const onSubmitSkillUpdate = (data: Skill) => {
    if (skillId) {
      apiClient
        .put(apiRoutes.skills.byId(skillId), data)
        .then((response) => {
          if (response.status === 200) {
            setSkill(response.data);
            setFormOpen(false);
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          console.error("Error updating skill:", err);
          setError(true);
        });
    }
  };

  const onSubmitSkillDelete = () => {
    if (skillId) {
      apiClient
        .delete(apiRoutes.skills.byId(skillId))
        .then((response) => {
          if (response.status === 204) {
            setFormOpen(false);
            nav(navigation.getSkills());
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          console.error("Error updating skill:", err);
          setError(true);
        });
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorAlert error={"Failed to fetch skill"} />;
  if (!skill) return <ErrorAlert error={"Skill not found"} />;
  return (
    <Stack spacing={5} direction={"column"} component={"section"}>
      <SkillFormModal
        defaultValues={skill}
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={onSubmitSkillUpdate}
      />
      <Actions
        onDelete={() => onSubmitSkillDelete()}
        onEdit={() => setFormOpen(true)}
      />
      <SkillView data={skill} />
    </Stack>
  );
};

export default SkillPage;
