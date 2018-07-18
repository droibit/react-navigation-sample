// ref. https://github.com/keri4141/React-Native-Navigation-Redux-Example/blob/master/src/actions/index.js

import { FSA } from "flux-standard-action";
import { ActionCreator, Dispatch, Action } from "redux";

export const COUNT_INCREMENT = "COUNT_INCREMENT";
export const COUNT_DECREMENT = "COUNT_DECREMENT";

export const incrementCount: ActionCreator<FSA<any>> = () => {
  return {
    type: COUNT_INCREMENT,
  };
};

export const decrementCount: ActionCreator<FSA<any>> = () => {
  return {
    type: COUNT_DECREMENT,
  };
};