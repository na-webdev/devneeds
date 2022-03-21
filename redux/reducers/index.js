import { combineReducers } from "redux";
import boardReducer from "./boardsReducer";

const rootReducer = combineReducers({
  boards: boardReducer,
});

export default rootReducer;
