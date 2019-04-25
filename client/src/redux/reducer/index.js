import {combineReducers} from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"
import oneCarReducer from "./oneCarReducer"
import deleteCarReducer from "./deleteCarReducer"
import updateCarReducer from "./updateCarReducer"
import updateUserReducer from "./adminReducer"
import purchaseReducer from "./purchaseReducer"
import { reducer as reduxForm } from 'redux-form';

 
export default combineReducers({
    auth: authReducer,
    admin: updateUserReducer,
    form:  reduxForm,
    Cars: carReducer,
    Onecar : oneCarReducer,
    CarRm: deleteCarReducer,
    CarPut: updateCarReducer,
    purchase: purchaseReducer
})