import {combineReducers} from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"
import oneCarReducer from "./oneCarReducer"

export default combineReducers({
    auth: authReducer,
    Cars: carReducer,
    Onecar : oneCarReducer
})