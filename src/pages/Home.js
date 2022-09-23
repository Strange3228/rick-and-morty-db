import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/dataActions";
//Styling and cnimations
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Character from "../components/Character";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  //Get data back
  const { characters, locations, episodes } = useSelector(
    (state) => state.data
  );
  console.log(characters);

  return (
    <ItemList>
      <h2>Characters</h2>
      <Items>
        {characters.map((item) => (
          <Character
            id={item.id}
            key={item.id}
            name={item.name}
            gender={item.gender}
            status={item.status}
            species={item.species}
            origin={item.origin.name}
            imageUrl={item.image}
          />
        ))}
      </Items>
    </ItemList>
  );
};

const ItemList = styled(motion.div)`
  max-width: 1460px;
  padding: 2rem 3rem;
  margin: auto;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: white;
  }
`;

const Items = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export default Home;
