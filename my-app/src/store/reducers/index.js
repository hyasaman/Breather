import { combineReducers } from "redux";
import { reducer as searchResult } from "./searchResult";
import { reducer as busy } from "./busy";

const rootReducer = combineReducers({
  searchResult,
  busy
});

export default rootReducer;
