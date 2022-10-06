import React, { useRef, useEffect } from "react";
import { CharacterCard } from "../styles";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slide } from "../animations";

const Character = ({ id, name, imageUrl }) => {
  const charCard = useRef(null);
  const StringPathId = id.toString();
  //Load details
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails("character", id));
  };

  useEffect(() => {
    charCard.current.classList.add("allow_events");
  }, []);

  return (
    <Link to={`/characters/${id}`}>
      <CharacterCard
        ref={charCard}
        layoutId={StringPathId}
        onClick={loadDetailsHandler}
      >
        <div className="">
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <h1>{name}</h1>
        </div>
      </CharacterCard>
    </Link>
  );
};

export default Character;
