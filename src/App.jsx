import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Region from "./pages/Region";
import Property from "./pages/Property";
import Header from "./Header";
import Locate from "./pages/Locate";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/service" element={<Service />} />
          <Route path="/region" element={<Region />} />
          <Route path="/locate" element={<Locate />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
