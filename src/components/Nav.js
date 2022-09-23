import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//Images
import logo from "../img/Rick_and_Morty_logo.png";

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <img src={logo} alt="Logo of rick and morty" />
      </Link>
    </NavStyled>
  );
};

const NavStyled = styled(motion.div)`
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 8rem;
  img {
    height: 100%;
  }
`;

export default Nav;
