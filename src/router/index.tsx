import DashboardLayout from "layouts/DashboardLayout";
import Homepage from "pages/Homepage";
import React from "react";
import { Route, Routes } from "react-router";
import routes from "./routes";
import SkillsPage from "pages/SkillsPage";
import SkillPage from "pages/SkillPage";

export interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Homepage />} />
        <Route path={routes.dashboard.races} element={<></>} />
        <Route path={routes.dashboard.race} element={<></>} />
        <Route path={routes.dashboard.classes} element={<></>} />
        <Route path={routes.dashboard.class} element={<></>} />
        <Route path={routes.dashboard.skills} element={<SkillsPage />} />
        <Route path={routes.dashboard.skill} element={<SkillPage />} />
        <Route path={routes.dashboard.feats} element={<></>} />
        <Route path={routes.dashboard.feat} element={<></>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
