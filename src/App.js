import React from "react";
import GlobalStyles from "./components/GlobalStyles";
//Pages
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
//Components
import Nav from "./components/Nav";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import Locations from "./pages/Locations";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/characters/:page" element={<Characters />} />
        <Route path="/characters/:page/:id" element={<Characters />} />
        <Route path="/episodes" exact element={<Episodes />} />
        <Route path="/locations" exact element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
