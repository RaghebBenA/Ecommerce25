import {ADD_PURCHASE} from "../../actions/types"

const intialState = {
    arr: []
}

export default function(state= intialState,actions){
    
    switch(actions.types){
        case ADD_PURCHASE:
        return {
            ...state,
          arr: [...state.arr ,...actions.payload]
        }
        default:
      return  state
    } 
}