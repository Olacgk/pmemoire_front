// import React from 'react'

import { Outlet } from "react-router-dom";
import HeaderDash from "../components/dashboard/header";
import SidebarDash from "../components/dashboard/sidebar";

export default function DashboardLayout() {
  return (
    <>
      <div>
        <HeaderDash />
        <div className="flex ">
          <SidebarDash />
          <div className="p-4 h-[calc(100vh-96px)] bg-[#f5f5f5] w-[86%]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
