import { combineReducers } from "redux";
import { reducer } from "./reducers/searchResult";
import { reducer as busy } from "./reducers/busy";

export default combineReducers({
  searchResult: reducer,
  busy
});
