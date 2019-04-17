import { UPDATE_ONECAR } from "../actions/types";

export default function(state = {}, actions) {
    switch (actions.type) {
      case UPDATE_ONECAR:
        return actions.payload;
      default:
        return state;
    }
  }