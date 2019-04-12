import {combineReducers} from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"
import oneCarReducer from "./oneCarReducer"
import { reducer as reduxForm } from 'redux-form';
 
export default combineReducers({
    auth: authReducer,
    form:  reduxForm,
    Cars: carReducer,
    Onecar : oneCarReducer,
   
})