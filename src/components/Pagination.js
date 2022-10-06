import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//Styled components
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import rightIcon from "../img/angle-right-solid.svg";
import leftIcon from "../img/angle-left-solid.svg";

const Pagination = ({ charactersPages, page, setPage }) => {
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < charactersPages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <PaginationContainer>
        <button className="prevBtn" onClick={prevPage}>
          <img src={leftIcon} alt="Previous page" />
        </button>
        <button className="nextBtn" onClick={nextPage}>
          <img src={rightIcon} alt="Next page" />
        </button>
      </PaginationContainer>
    </>
  );
};

export default Pagination;

const PaginationContainer = styled(motion.div)`
  button {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgb(83, 128, 126);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &.nextBtn {
      right: 2rem;
      img {
        transform: translateX(0.25rem);
      }
    }
    &.prevBtn {
      left: 2rem;
      img {
        transform: translateX(-0.25rem);
      }
    }
    img {
      height: 80%;
      object-fit: contain;
    }
  }
`;
