import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <h1>Links</h1>
      <MainLinks>
        <Link to="/characters">Characters</Link>
        <Link to="/episodes">Episodes</Link>
        <Link to="/locations">Locations</Link>
      </MainLinks>
    </div>
  );
};

const MainLinks = styled(motion.div)``;

export default Home;
