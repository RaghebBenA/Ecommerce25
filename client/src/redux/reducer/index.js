import {combineReducers} from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"
import oneCarReducer from "./oneCarReducer"
import deleteCarReducer from "./deleteCarReducer"
import updateCarReducer from "./updateCarReducer"
import updateUser from "./adminReducer"
import { reducer as reduxForm } from 'redux-form';
 
export default combineReducers({
    auth: authReducer,
    admin: updateUser,
    form:  reduxForm,
    Cars: carReducer,
    Onecar : oneCarReducer,
    CarRm: deleteCarReducer,
    CarPut: updateCarReducer
   
})