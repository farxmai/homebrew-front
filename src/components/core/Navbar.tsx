import { Translate } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import DiceIcon from "components/icons/DiceIcon";
import { useLang } from "hooks/useLang";
import React from "react";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ px: 5 }}>
        <Stack direction={"row"} justifyContent={"space-between"} width="100%">
          <Stack direction={"row"} alignItems="center">
            <Typography
              variant="h5"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 900,
              }}
            >
              <DiceIcon style={{ width: 35, height: 35, marginRight: 5 }} />
              Homebrew
            </Typography>
          </Stack>
          <LanguageToggle />
          {/* <IconButton>
            <Menu />
          </IconButton> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const LanguageToggle: React.FC = () => {
  const { toggleLanguage, lang } = useLang();
  return (
    <IconButton color="inherit" onClick={toggleLanguage}>
      <Translate /> <Typography variant="caption">{lang}</Typography>
    </IconButton>
  );
};
