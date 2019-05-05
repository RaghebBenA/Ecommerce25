import {
  ADD_PURCHASE,
  DELETE_PURCHASE,
  DELETE_AllPURCHASE
} from "../../actions/types";

const intialState = {
  arr: []
};

export default function(state = intialState, actions) {
  switch (actions.type) {
    case ADD_PURCHASE:
      return {
        ...state,
        arr: [...state.arr, actions.payload]
      };
    case DELETE_PURCHASE:
      state.arr.splice(actions.payload, 1);
      return {
        ...state
      };
    case DELETE_AllPURCHASE:
      state.arr.splice(0, state.arr.length);
      return {
        ...state
      };
    default:
      return state;
  }
}
