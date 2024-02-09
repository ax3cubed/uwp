import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';

const SidebarLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden ml-2">
    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="  relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
       <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       <Outlet />
     </div>
   
  </div>
  )
}

export default SidebarLayout;