import { Box, Card, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import routes from "router/routes";

export interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <Box component="section">
      <Grid container spacing={8}>
        <Grid size={12}>
          <Card>
            <Typography variant="h1" component="h1" gutterBottom>
              Welcome to the Homebrew
            </Typography>
            <Typography variant="body1">
              This is the main content area of the homepage. This platform was
              created to support most common rules for D&D 3.5 companies with
              our small additions. Here you can find various information and
              links to other sections of the application.
            </Typography>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card>
            <Typography variant="h4" component="h2" gutterBottom>
              Core Rules
            </Typography>
            <Typography variant="body1">
              (EDIT HERE) Links to the core rules of Dungeons & Dragons 3.5:
            </Typography>
            <ul>
              <li>
                <Link to={""}>Base Rules</Link>
              </li>
              <li>
                <Link to={`/${routes.dashboard.races}`}>Races</Link>
              </li>
              <li>
                <Link to={`/${routes.dashboard.classes}`}>Classes</Link>
              </li>
              <li>
                <Link to={`/${routes.dashboard.skills}`}>Skills</Link>
              </li>
              <li>
                <Link to={`/${routes.dashboard.feats}`}>Feats</Link>
              </li>
            </ul>
            {/* <List>
              <ListItem divider>
                <Link to={""}>Base Rules</Link>
              </ListItem>
              <ListItem divider>
                <Link to={`/${routes.dashboard.races}`}>Races</Link>
              </ListItem>
              <ListItem divider>
                <Link to={`/${routes.dashboard.classes}`}>Classes</Link>
              </ListItem>
              <ListItem divider>
                <Link to={`/${routes.dashboard.skills}`}>Skills</Link>
              </ListItem>
              <ListItem divider>
                <Link to={`/${routes.dashboard.feats}`}>Feats</Link>
              </ListItem>
            </List> */}
          </Card>
        </Grid>
        <Grid size={6}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
