import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Region from "./pages/Region";
import Study from "./pages/Detail/Study/index";
import Interior from "./pages/Detail/Interior/index";
import House from "./pages/Detail/House/index";
import Build from "./pages/Detail/Build/index";
import Agriculture from "./pages/Detail/Agriculture/index";
import Property from "./pages/Property";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/service" element={<Service />} />
          <Route path="/region" element={<Region />} />
          <Route path="/study" element={<Study />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/house" element={<House />} />
          <Route path="/build" element={<Build />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
