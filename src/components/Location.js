import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CharacterCard } from "../styles";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Location = ({ id, name }) => {
  //Load details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails("location", id));
  };

  return (
    <LocationCard onClick={loadDetailsHandler}>
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
