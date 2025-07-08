import { Box, Card, Grid, Typography } from "@mui/material";
import { useLang } from "hooks/useLang";
import React from "react";
import { Link } from "react-router";
import routes from "router/routes";

export interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const { t } = useLang();

  const coreRulesData = {
    title: t("homepage.coreRules.title"),
    description: t("homepage.coreRules.description"),
    urls: [
      { name: t("homepage.coreRules.urls.baseRules"), url: "/" },
      {
        name: t("homepage.coreRules.urls.races"),
        url: `/${routes.dashboard.races}`,
      },
      {
        name: t("homepage.coreRules.urls.classes"),
        url: `/${routes.dashboard.classes}`,
      },
      {
        name: t("homepage.coreRules.urls.skills"),
        url: `/${routes.dashboard.skills}`,
      },
      {
        name: t("homepage.coreRules.urls.feats"),
        url: `/${routes.dashboard.feats}`,
      },
      {
        name: t("homepage.coreRules.urls.spells"),
        url: `/${routes.dashboard.spells}`,
      },
      // { name: t("homepage.coreRules.urls.equipment"), url: `/${routes.dashboard.equipment}` },
      // { name: t("homepage.coreRules.urls.magicItems"), url: `/${routes.dashboard.magicItems}` },
      // { name: t("homepage.coreRules.urls.monsters"), url: `/${routes.dashboard.monsters}` },
    ],
  };
  return (
    <Box component="section">
      <Grid container spacing={8}>
        <Grid size={12}>
          <Card>
            <Typography variant="h1" component="h1" gutterBottom>
              {t("homepage.title")}
            </Typography>
            <Typography variant="body1">{t("homepage.description")}</Typography>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card>
            <Typography variant="h4" component="h2" gutterBottom>
              {coreRulesData.title}
            </Typography>
            <Typography variant="body1">{coreRulesData.description}</Typography>
            <ul>
              {coreRulesData.urls.map((item, index) => (
                <li key={index}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
        {/* <Grid size={6}>
          <Card>
            <Typography variant="h4" component="h2" gutterBottom>
              Tools
            </Typography>
            <Typography variant="body1">
              Useful tools to help you in your adventures:
            </Typography>
            <List>
              <ListItem divider>
                <Link to={""}>Character Sheets</Link>
              </ListItem>
              <ListItem divider>
                <Link to={""}>Dice Rollers</Link>
              </ListItem>
            </List>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Homepage;
