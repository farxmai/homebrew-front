import { Card, Stack, Tooltip, Typography } from "@mui/material";
import Actions from "components/core/Actions";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import { useLang } from "hooks/useLang";
import SkillFormModal from "pages/SkillPage/SkillFormModal";
import React from "react";
import { Link, useNavigate } from "react-router";
import { navigation } from "router/routes";
import { Skill } from "types/skill";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";

export interface SkillsPageProps {}

const SkillsPage: React.FC<SkillsPageProps> = () => {
  const { t, lang } = useLang();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [skills, setSkills] = React.useState<Skill[]>([]);
  const [formOpen, setFormOpen] = React.useState(false);

  const navigate = useNavigate();

  const renderSkills = skills.map((skill) => ({
    id: skill.id,
    name:
      skill.translations?.find((trans) => trans.locale === lang)?.name ||
      skill.id,
    descriptionShort:
      skill.translations?.find((trans) => trans.locale === lang)
        ?.descriptionShort || skill.id,
  }));

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
        <Typography variant="h1">{t("skillsPage.title")}</Typography>
        <Typography variant="body1">{t("skillsPage.description")}</Typography>
        <ul>
          {renderSkills.map((skill) => (
            <li key={skill.id}>
              <Tooltip title={skill.descriptionShort} placement="right-start">
                <Link to={`${navigation.getSkill(skill.id)}`}>
                  {skill.name}
                </Link>
              </Tooltip>
            </li>
          ))}
        </ul>
      </Card>
    </Stack>
  );
};

export default SkillsPage;
