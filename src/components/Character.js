import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import { Link } from "react-router-dom";

const Character = ({ id, name, imageUrl }) => {
  //Load details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails("character", id));
  };

  return (
    <CharacterCard onClick={loadDetailsHandler} to={`/characters/${id}`}>
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
