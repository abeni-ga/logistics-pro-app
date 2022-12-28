import React from "react";
import { Outlet } from "react-router";

// Here you can add common things like same footer maybe same thing that can happen in all
const CommonLayout = ({ children }) => (
  <div className="h-full">
    <Outlet />
  </div>
);

export default CommonLayout;
