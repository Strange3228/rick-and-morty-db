import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/dataAction";
//Styling and cnimations
import styled from "styled-components";
import { motion } from "framer-motion";
import { ItemList, Items } from "../styles";
//Components
import Location from "../components/Location";

const Locations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  //Get data back
  const { locations } = useSelector((state) => state.data);
  console.log(locations);

  return (
    <ItemList>
      <h2>Locations</h2>
      <Items>
        {locations.map((item) => (
          <Location id={item.id} key={item.id} name={item.name} />
        ))}
      </Items>
    </ItemList>
  );
};

export default Locations;
