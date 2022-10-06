const initState = {
  characters: [],
  charactersPages: 1,
  locations: [],
  episodes: [],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        characters: action.payload.characters,
        charactersPages: action.payload.charactersPages,
        locations: action.payload.locations,
        episodes: action.payload.episodes,
      };
    default:
      return { ...state };
  }
};

export default dataReducer;
