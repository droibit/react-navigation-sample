import { FSA } from "flux-standard-action";
import * as Actions from "./actions";

export function counter(state: number = 0, action: FSA<any>): number {
  console.log(`counter(type=${action.type})`);
  switch (action.type) {
    case Actions.COUNT_INCREMENT:
      return state + 1;
    case Actions.COUNT_DECREMENT:
      return state - 1;
  }
  return state;
}

export const reducers = {
  counter
};