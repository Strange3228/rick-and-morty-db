import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Character = ({ id, name, imageUrl }) => {
  //Load details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails("character", id));
  };

  return (
    <CharacterCard onClick={loadDetailsHandler}>
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
