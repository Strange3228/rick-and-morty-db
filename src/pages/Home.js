import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import charactersImg from "../img/characters.png";
import locationsImg from "../img/locations.png";
import episodesImg from "../img/episodes.png";
import rickPushesMortyToWatch from "../img/rick-and-morty-eyes.png";
import rickHeads from "../img/rick-heads.png";
import rickHanging from "../img/rick-hanging.png";

const Home = () => {
  console.log(charactersImg);
  return (
    <HomeContainer>
      <MainLinks>
        <div className="link--characters">
          <LinkStyled to="/characters">Characters</LinkStyled>
        </div>
        <div className="link--episodes">
          <LinkStyled to="/episodes">Episodes</LinkStyled>
        </div>
        <div className="link--locations">
          <LinkStyled to="/locations">Locations</LinkStyled>
        </div>
      </MainLinks>
    </HomeContainer>
  );
};

const HomeContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  transition: all 0.4s ease;
`;

const MainLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 5rem;
  & > div {
    height: 20rem;
    width: 20rem;
    position: relative;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    &.link--characters {
      background-image: url(${charactersImg});
    }
    &.link--locations {
      background-image: url(${locationsImg});
    }
    &.link--episodes {
      background-image: url(${episodesImg});
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #0000008f;
      border-radius: 10px;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      transform: scale(0.5);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform 0.4s ease-out;
    }
    //Episodes Anim
    &.link--episodes::after {
      background-image: url(${rickPushesMortyToWatch});
    }
    &.link--episodes:hover::after {
      transform: scale(1.4) translateY(-4rem);
    }
    //Location Anim
    &.link--locations::after {
      background-image: url(${rickHanging});
    }
    &.link--locations:hover::after {
      transform: scale(1.2) translateY(52%);
    }
    //Characters Anim
    &.link--characters::after {
      background-image: url(${rickHeads});
    }
    &.link--characters:hover::after {
      transform: scale(1.8);
    }
    &:hover ${LinkStyled} {
      font-size: 3rem;
    }
  }
`;

export default Home;
