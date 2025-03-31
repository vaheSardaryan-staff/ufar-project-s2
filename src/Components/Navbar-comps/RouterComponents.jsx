import React from "react";
import { Routes, Route } from "react-router-dom";
import Careers from "./Careers";
import Resources from "./Resources";
import Universities from "./Universities";

const RouterComponents = () => {
  return (
    <main className="content-wrapper">
      <Routes>
        <Route path="/universities" element={<Universities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </main>
  );
};

export default RouterComponents;