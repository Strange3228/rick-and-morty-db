import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/dataAction";
//Styling and cnimations
import styled from "styled-components";
import { motion } from "framer-motion";
import { ItemList, Items } from "../styles";
//Components
import Character from "../components/Character";
import CharacterDetails from "../components/CharacterDetails";
import { useLocation } from "react-router-dom";

const Home = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //Fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  //Get data back
  const { characters } = useSelector((state) => state.data);

  return (
    <ItemList>
      <h2>Characters</h2>
      {pathId && <CharacterDetails />}
      <Items>
        {characters.map((item) => (
          <Character
            id={item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.image}
          />
        ))}
      </Items>
    </ItemList>
  );
};

export default Home;
