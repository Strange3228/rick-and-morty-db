import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/dataAction";
//Styling and cnimations
import styled from "styled-components";
import { motion } from "framer-motion";
import { ItemList, Items } from "../styles";
//Components
import Episode from "../components/Episode";

const Episodes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  //Get data back
  const { episodes } = useSelector((state) => state.data);
  console.log(episodes);

  return (
    <ItemList>
      <h2>Episodes</h2>
      <Items>
        {episodes.map((item) => (
          <Episode
            id={item.id}
            key={item.id}
            airDate={item.air_date}
            name={item.name}
          />
        ))}
      </Items>
    </ItemList>
  );
};

export default Episodes;
