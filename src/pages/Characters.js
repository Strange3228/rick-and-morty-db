import React, { useEffect, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/dataAction";
//Styling and animations
import { AnimatePresence } from "framer-motion";
import { ItemList, Items } from "../styles";
//Components
import Character from "../components/Character";
import CharacterDetails from "../components/CharacterDetails";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";

const Characters = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[3];
  const pageNumb = location.pathname.split("/")[2];
  //States
  const [page, setPage] = useState(pageNumb);
  //Fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData(page));
  }, [dispatch, page]);
  //Get data back
  const { characters, charactersPages } = useSelector((state) => state.data);
  return (
    <ItemList>
      <h2>Characters</h2>
      <AnimatePresence>
        {pathId && pageNumb && <CharacterDetails pathId={pathId} page={page} />}
      </AnimatePresence>
      <Items>
        {characters.map((item) => (
          <Character
            id={item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.image}
            page={page}
          />
        ))}
      </Items>
      <Pagination
        charactersPages={charactersPages}
        page={page}
        setPage={setPage}
      ></Pagination>
    </ItemList>
  );
};

export default Characters;
