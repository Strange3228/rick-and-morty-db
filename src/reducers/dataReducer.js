const initState = {
  characters: [],
  locations: [],
  episodes: [],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        characters: action.payload.characters,
        locations: action.payload.locations,
        episodes: action.payload.episodes,
      };
    default:
      return { ...state };
  }
};

export default dataReducer;
