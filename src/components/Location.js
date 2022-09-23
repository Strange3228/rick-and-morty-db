import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";

const Location = ({ id, name }) => {
  return (
    <LocationCard>
      <div>
        <h1>{name}</h1>
      </div>
    </LocationCard>
  );
};

const LocationCard = styled(CharacterCard)`
  text-align: center;
`;

export default Location;
