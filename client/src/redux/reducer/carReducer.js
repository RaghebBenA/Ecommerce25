import {FETCH_CARS} from "../actions/types"

export default function(state= [], actions){
    switch(actions.type){
        case FETCH_CARS: 
        return actions.payload
      default: 
      return state
    }
}