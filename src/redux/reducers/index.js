import { combineReducers } from "redux";
// We're allowed to name courseReducer whatever
// we want since export default is called on it.
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
