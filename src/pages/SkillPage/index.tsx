import { Stack } from "@mui/material";
import Actions from "components/core/Actions";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import React from "react";
import { useParams } from "react-router";
import { Skill } from "types/skill";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";
import SkillView from "./SkillView";
import SkillFormModal from "./SkillFormModal";

export interface SkillPageProps {}

const SkillPage: React.FC<SkillPageProps> = () => {
  const params = useParams();
  const skillId = params.id;

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [skill, setSkill] = React.useState<Skill | null>(null);
  const [formOpen, setFormOpen] = React.useState(false);

  React.useEffect(() => {
    if (!skillId) {
      setError(true);
      setLoading(false);
      return;
    }
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
  }, [skillId]);

  if (loading) return <Loader />;
  if (error) return <ErrorAlert error={"Failed to fetch skill"} />;
  if (!skill) return <ErrorAlert error={"Skill not found"} />;
  return (
    <Stack spacing={5} direction={"column"} component={"section"}>
      <SkillFormModal
        defaultValues={skill}
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={(data) => console.log(data)}
      />
      <Actions
        onDelete={() => {}}
        onEdit={() => setFormOpen(true)}
        onAdd={() => {}}
      />
      <SkillView data={skill} />
    </Stack>
  );
};

export default SkillPage;
