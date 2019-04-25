import { FETCH_PURCH} from "../actions/types";



export default function(state = [], actions) {
  switch (actions.type) {
    case FETCH_PURCH:
      return actions.payload;
    default:
      return state;
  }
}