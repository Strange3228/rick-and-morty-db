import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Episode = ({ id, name, airDate }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails("episode", id));
  };

  return (
    <EpisodeCard onClick={loadDetailsHandler}>
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
