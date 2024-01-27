import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Region from "./pages/Region";
import Property from "./pages/Property";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/region" element={<Region />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
