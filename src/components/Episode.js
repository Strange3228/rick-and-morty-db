import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";

const Episode = ({ id, name, airDate, episode }) => {
  return (
    <EpisodeCard>
      <div>
        <h1>{name}</h1>
      </div>
    </EpisodeCard>
  );
};

const EpisodeCard = styled(CharacterCard)`
  text-align: center;
`;

export default Episode;
