import axios from "axios";
import { DetailsURL } from "../api";

//Action creator

export const loadDetails = (dataType, id) => async (dispatch) => {
  //Fetch axios
  const details = await axios.get(DetailsURL(dataType, id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      details: details.data,
    },
  });
};
