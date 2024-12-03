import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home";
import { WhatTesting } from "./Content/components/Testing/components/WhatTesting/WhatTesting";

/* interface HomeRoutesProps {
  onLogout: () => void;
}
 */
const HomeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/testing" element={<WhatTesting />} />
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
