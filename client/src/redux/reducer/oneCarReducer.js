import {FETCH_ONECAR} from "../actions/types"

export default function(state= {}, actions){
       switch(actions.type){
       case FETCH_ONECAR:
       return actions.payload
      default: 
      return state
    }
}