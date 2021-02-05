import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../features/userReducer";
import { verificationReducer } from "../features/verificationReducer";

const allReducers = combineReducers({
  user: userReducer,
  message: verificationReducer,
});

export type verificationStore = ReturnType<typeof allReducers>;
export default createStore(allReducers, applyMiddleware(thunk));
