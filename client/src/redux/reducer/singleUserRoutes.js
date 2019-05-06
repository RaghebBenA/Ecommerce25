import { FETCH_ONEUSER } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ONEUSER:
      return action.payload;
    default:
      return state;
  }
}
