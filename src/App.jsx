import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";
import SidebarLayout from "./layouts/SidebarLayout";

// Import pages
import AssignCarrier from "./pages/AssignCarrier";
import StopPage from "./pages/Stop";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route exact path="/assign-carrier" element={<AssignCarrier />} />
          <Route exact path="/manage-stops" element={<StopPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
