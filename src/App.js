import React from "react";
import GlobalStyles from "./components/GlobalStyles";
//Pages
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import Locations from "./pages/Locations";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/characters" exact element={<Characters />} />
          <Route path="/episodes" exact element={<Episodes />} />
          <Route path="/locations" exact element={<Locations />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
