import React from "react";
import { Routes, Route } from "react-router-dom";
import Tests from "./Tests";
import Resources from "./Resources";
import Universities from "./Universities";

const RouterComponents = () => {
  return (
    <main className="content-wrapper">
      <Routes>
        <Route path="/universities" element={<Universities />} />
        <Route path="/test" element={<Tests />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </main>
  );
};

export default RouterComponents;