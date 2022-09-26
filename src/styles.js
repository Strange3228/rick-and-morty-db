import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ItemList = styled(motion.div)`
  max-width: 1520px;
  padding: 2rem 3rem;
  margin: auto;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 3rem;
  }
`;

export const Items = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;
`;

export const CharacterCard = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  background-color: #e27d5f;
  padding: 1rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: -2px 12px 23px -13px rgba(95, 95, 95, 1);
  -moz-box-shadow: -2px 12px 23px -13px rgba(95, 95, 95, 1);
  box-shadow: -2px 12px 23px -13px rgba(95, 95, 95, 1);
  h1 {
    color: white;
    font-size: 1.5rem;
  }
  & > div {
    flex: 1;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
`;
