import { combineReducers } from "redux";
import customerReducer from "./customer";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  customers: customerReducer,
  counter: counterReducer
});

export default rootReducer;
