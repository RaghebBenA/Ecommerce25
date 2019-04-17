import { DELETE_ONECAR } from "../actions/types";

export default function(state = {}, actions) {
    switch (actions.type) {
      case DELETE_ONECAR:
        return actions.payload;
      default:
        return state;
    }
  }
  