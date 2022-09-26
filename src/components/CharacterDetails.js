import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../actions/dataAction";
import { useNavigate } from "react-router-dom";

const CharacterDetails = () => {
  const { details, isLoading } = useSelector((state) => state.details);
  const navigate = useNavigate();
  //Close Details
  const closeDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/characters");
    }
  };

  return (
    <>
      {!isLoading && (
        <DetailsShadow className="shadow" onClick={closeDetailsHandler}>
          <DetailsWrapp>
            <div className="details__image">
              <img src={details.image} alt={details.name} />
            </div>
            <div className="details__content">
              <h2>{details.name}</h2>
              <p>Gender: {details.gender}</p>
              <p>Alive: {details.status}</p>
              <p>Species: {details.species}</p>
              <p>Origin: {details.origin.name}</p>
              <p>Location: {details.location.name}</p>
            </div>
          </DetailsWrapp>
        </DetailsShadow>
      )}
    </>
  );
};

const DetailsShadow = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow-y: scroll;
`;
const DetailsWrapp = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  display: flex;
  column-gap: 3rem;
  padding-right: 2rem;
  overflow: hidden;
  -webkit-box-shadow: -2px 12px 23px -13px rgba(95, 95, 95, 1);
  -moz-box-shadow: -2px 12px 23px -13px rgba(95, 95, 95, 1);
  box-shadow: -2px 12px 23px -13px rgba(95, 95, 95, 1);
  max-width: 90%;
  width: 700px;
  .details__content {
    padding: 2rem 0;
  }
  h2 {
    color: #a36678;
    margin-bottom: 2rem;
    text-align: left;
  }
  p {
    margin-bottom: 0.3rem;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
  img {
    display: block;
    height: 100%;
  }
`;

export default CharacterDetails;
