// import React from 'react'

import { Outlet } from "react-router-dom";
import HeaderDash from "../components/dashboard/header";
import SidebarDash from "../components/dashboard/sidebar";
import FooterDash from "../components/dashboard/footer";

export default function DashboardLayout() {
  return (
    <>
      <div className="h-screen overflow-hidden w-full flex">
        <SidebarDash />
        <div className="flex flex-col w-[80%] space-y-4 bg-[#f5f5f5]">
          <HeaderDash />
          <div className="p-4 h-[calc(100vh-96px)] overflow-auto">
            <Outlet />
          </div>
          <div className="bottom-0 mt-4 py-2">
            <FooterDash/>
          </div>
        </div>
      </div>
    </>
  );
}
