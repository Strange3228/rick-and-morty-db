import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  details: detailsReducer,
});

export default rootReducer;
