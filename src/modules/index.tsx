import { combineReducers } from "redux";
import keywordList from "./keywordList";

const rootReducer = combineReducers({
  keywordList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
