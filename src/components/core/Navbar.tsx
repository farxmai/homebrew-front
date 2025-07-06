import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import DiceIcon from "components/icons/DiceIcon";
import React from "react";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ px: 5 }}>
        <Stack direction={"row"} justifyContent={"space-between"} width="100%">
          <Stack direction={"row"} alignItems="center">
            <DiceIcon style={{ width: 35, height: 35, marginRight: 5 }} />
            <Typography variant="h5">Homebrew</Typography>
          </Stack>
          <IconButton>
            <Menu />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
