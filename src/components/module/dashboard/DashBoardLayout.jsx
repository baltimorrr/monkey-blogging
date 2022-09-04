import React from "react";
import { Outlet } from "react-router-dom";

import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import NotFoundPage from "../../../pages/NotFoundPage";

import { useAuth } from "../../../contexts/auth-context";

const DashBoardLayout = ({ children }) => {
  const {userInfo} = useAuth()
  if(!userInfo) return <NotFoundPage />

  return (
    <div className="max-w-[1600px] mx-auto my-0">
      <DashboardHeader></DashboardHeader>
      <div className="dashboard-main flex px-5 py-10 gap-x-10 items-start">
        <Sidebar></Sidebar>
        <div className="dashboard-children">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
