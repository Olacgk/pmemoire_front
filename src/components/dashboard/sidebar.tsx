// import React from 'react'

import { Link } from "react-router-dom";

export default function SidebarDash() {
  return (
    <>
      <aside className="h-[calc(100vh-6rem)] w-[14%] p-4 shadow-lg shadow-blue-gray-900/5 sticky flex-col items-center">
        <nav>
          <Link to="experts"> Expert</Link>
        </nav>
      </aside>
    </>
  );
}
