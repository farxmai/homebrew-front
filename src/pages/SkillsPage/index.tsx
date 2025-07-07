import { Card, Typography } from "@mui/material";
import ErrorAlert from "components/core/ErrorAlert";
import Loader from "components/core/Loader";
import React from "react";
import { Link } from "react-router";
import { navigation } from "router/routes";
import apiRoutes from "utils/api/apiRoutes";
import apiClient from "utils/api/axios";

export interface SkillsPageProps {}

const SkillsPage: React.FC<SkillsPageProps> = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [skills, setSkills] = React.useState<any[]>([]);

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

  if (loading) return <Loader />;
  if (error) return <ErrorAlert error={"Failed to fetch skills"} />;
  return (
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
  );
};

export default SkillsPage;
