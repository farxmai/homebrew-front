import { Box } from "@mui/material";
import Navbar from "components/core/Navbar";
import React from "react";
import { Outlet } from "react-router";

export interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ zIndex: 1, position: "relative", p: 5 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
