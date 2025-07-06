import DashboardLayout from "layouts/DashboardLayout";
import Homepage from "pages/Homepage";
import React from "react";
import { Route, Routes } from "react-router";

export interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
