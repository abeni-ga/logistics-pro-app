import React from "react";
import SideBar from "../components/Common/Sidebar/Sidebar.component";
import { Outlet } from "react-router";
import TopBar from "../components/TopBar/TopBar.component";

// Here you can add common things like same footer maybe same thing that can happen in all
const MainLayout = () => (
  <div className="flex flex-auto flex-row h-screen">
    <SideBar />
    <div className="flex flex-col h-screen w-full">
      <TopBar />
      <Outlet /> 
    </div>
  </div>
);

export default MainLayout;
