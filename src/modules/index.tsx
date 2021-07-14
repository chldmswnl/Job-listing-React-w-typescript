import { combineReducers } from "redux";
import jobList from "./jobList";

const rootReducer = combineReducers({
  jobList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
