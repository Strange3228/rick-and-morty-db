import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";

const Character = ({ id, name, gender, status, species, origin, imageUrl }) => {
  return (
    <CharacterCard>
      <div className="">
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </CharacterCard>
  );
};

export default Character;
