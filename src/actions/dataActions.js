import axios from "axios";
import { charactersUrl, locationsUrl, episodesUrl } from "../api";

//Action creator

export const loadData = () => async (dispatch) => {
  //Fetch axios
  const characters = await axios.get(charactersUrl());
  const locations = await axios.get(locationsUrl());
  const episodes = await axios.get(episodesUrl());
  dispatch({
    type: "FETCH_DATA",
    payload: {
      characters: characters.data.results,
      locations: locations.data.results,
      episodes: episodes.data.results,
    },
  });
};
