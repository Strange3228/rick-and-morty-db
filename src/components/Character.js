import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Character = ({ id, name, gender, status, species, origin, imageUrl }) => {
  return (
    <CharacterCard>
      <img src={imageUrl} alt={name} />
      <div>
        <h1>{name}</h1>
        <div className="stats">
          <div>
            <img src="" alt="" />
            <p>Status: {status}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Gender: {gender}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Species: {species}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Origin: {origin}</p>
          </div>
        </div>
      </div>
    </CharacterCard>
  );
};

const CharacterCard = styled(motion.div)``;

export default Character;
