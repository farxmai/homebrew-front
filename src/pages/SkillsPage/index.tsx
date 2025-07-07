import { Card, Stack, Typography } from "@mui/material";
import Actions from "components/core/Actions";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import SkillFormModal from "pages/SkillPage/SkillFormModal";
import React from "react";
import { Link, useNavigate } from "react-router";
import { navigation } from "router/routes";
import { Skill } from "types/skill";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";

export interface SkillsPageProps {}

const SkillsPage: React.FC<SkillsPageProps> = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [skills, setSkills] = React.useState<any[]>([]);
  const [formOpen, setFormOpen] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    apiClient
      .get(apiRoutes.skills.base)
      .then((response) => {
        if (response.status === 200) {
          setSkills(response.data);
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
  }, []);

  const onSubmitSkillCreate = (data: Skill) => {
    apiClient
      .post(apiRoutes.skills.base, data)
      .then((response) => {
        if (response.status === 200 && response.data.id) {
          navigate(navigation.getSkill(response.data.id));
          setFormOpen(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error updating skill:", err);
        setError(true);
      });
  };

  if (loading) return <Loader />;
  if (error) return <ErrorAlert error={"Failed to fetch skills"} />;
  return (
    <Stack spacing={5} direction={"column"} component={"section"}>
      <Actions onAdd={() => setFormOpen(true)} />
      <SkillFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={onSubmitSkillCreate}
      />
      <Card>
        <Typography variant="h1">Skills</Typography>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <Link to={`${navigation.getSkill(skill.id)}`}>{skill.name}</Link>
            </li>
          ))}
        </ul>
      </Card>
    </Stack>
  );
};

export default SkillsPage;
