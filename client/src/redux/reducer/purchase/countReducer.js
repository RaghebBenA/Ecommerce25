import {INCREMENT_COUNT,DECREMENT_COUNT,RESET_COUNT} from "../../actions/types"

const initialState = {
    count: 0,
}

export default function(state= initialState,actions){
    switch(actions.type){
        case INCREMENT_COUNT:
        state.count++
        return {
             ...state
        }
        case DECREMENT_COUNT:
        state.count--
        return {
            ...state
        }
        case RESET_COUNT:
        state.count = 0
        return {
            ...state
        }
        default:
        return state
    }
}