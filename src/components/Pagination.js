import React from "react";
//Styled components
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import rightIcon from "../img/angle-right-solid.svg";
import leftIcon from "../img/angle-left-solid.svg";

const Pagination = ({ charactersPages, page, setPage }) => {
  return (
    <>
      {page > 1 && (
        <PaginationBtn
          to={`/characters/${page - 1}`}
          className="prevBtn"
          onClick={() => (page > 1 ? setPage(page - 1) : "")}
        >
          <img src={leftIcon} alt="Previous page" />
        </PaginationBtn>
      )}
      {page < charactersPages && (
        <PaginationBtn
          to={`/characters/${parseInt(page) + 1}`}
          className="nextBtn"
          onClick={() => (page < charactersPages ? setPage(page + 1) : "")}
        >
          <img src={rightIcon} alt="Next page" />
        </PaginationBtn>
      )}
      <PageProgress>
        {(() => {
          let blocks = [];
          for (let i = 1; i <= charactersPages; i++) {
            blocks.push(
              <PageLink
                to={`/characters/${i}`}
                onClick={() => setPage(i)}
                key={i}
                className={i <= page ? "active" : ""}
              ></PageLink>
            );
          }
          return blocks;
        })()}
      </PageProgress>
    </>
  );
};

export default Pagination;

const PaginationBtn = styled(Link)`
  position: fixed;
  display: block;
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
`;
const PageProgress = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 3rem;
  background-color: rgb(83, 128, 126);
`;
const PageLink = styled(Link)`
  height: 2rem;
  flex: 1;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
  background-color: rgba(22, 59, 58, 0);
  &.active {
    background-color: rgb(22, 59, 58);
    &::before {
      width: 100%;
    }
  }
`;
