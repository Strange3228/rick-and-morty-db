import axios from "axios";
import { charactersUrl, locationsUrl, episodesUrl } from "../api";

//Action creator

export const loadData =
  (page = 1) =>
  async (dispatch) => {
    //Fetch axios
    const characters = await axios.get(charactersUrl(page));
    const locations = await axios.get(locationsUrl());
    const episodes = await axios.get(episodesUrl(1));
    dispatch({
      type: "FETCH_DATA",
      payload: {
        characters: characters.data.results,
        charactersPages: characters.data.info.pages,
        locations: locations.data.results,
        episodes: episodes.data.results,
      },
    });
  };
