import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/dataActions";
//Styling and cnimations
import styled from "styled-components";
import { motion } from "framer-motion";
import { ItemList, Items } from "../styles";
//Components
import Character from "../components/Character";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  //Get data back
  const { characters } = useSelector((state) => state.data);
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

export default Home;
