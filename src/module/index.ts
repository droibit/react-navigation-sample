import { createStore, combineReducers, applyMiddleware, } from "redux";
import thunk from 'redux-thunk';
import { reducers } from "./reducer";

const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);