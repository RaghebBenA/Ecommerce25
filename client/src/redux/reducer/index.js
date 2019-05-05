import {combineReducers} from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"
import oneCarReducer from "./oneCarReducer"
import deleteCarReducer from "./deleteCarReducer"
import updateCarReducer from "./updateCarReducer"
import updateUserReducer from "./adminReducer"
import purchaseReducer from "./purchaseReducer"
import fetchSingleUser from "./singleUserRoutes"
import purchaseList from "./purchase/purchaseRed"
import countReducer from "./purchase/countReducer"
import { reducer as reduxForm } from 'redux-form';

 
export default combineReducers({
    auth: authReducer,
    admin: updateUserReducer,
    singleuser: fetchSingleUser,
    form:  reduxForm,
    Cars: carReducer,
    Onecar : oneCarReducer,
    CarRm: deleteCarReducer,
    CarPut: updateCarReducer,
    purchase: purchaseReducer,
    listPurchase: purchaseList,
    count: countReducer
})