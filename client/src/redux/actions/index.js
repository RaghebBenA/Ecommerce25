import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_CARS } from "./types";
import {FETCH_ONECAR} from "./types"
import { DELETE_ONECAR } from "./types";
import {UPDATE_ONECAR} from "./types"
import {UPDATE_USER} from "./types"


export const fecthUser = () => async (dispatch) => {
  const res = await axios.get("api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const updateUser = (userId,values) => async (dispatch) => {
  const res = await axios.put(`/api/user/${userId}`, values);
  dispatch({ type: UPDATE_USER, payload: res.data });
};

export const postCar = (values,history) => async (dispatch) => {
  const res = await axios.post("/api/cars ", values);
  history.push("/product");
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchCars = () => async (dispatch) => {
  const res = await axios.get("/api/cars");
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchOneCar = (carId) => async (dispatch) =>{
  const res = await axios.get(`/api/cars/${carId}`)
  dispatch({type: FETCH_ONECAR , payload: res.data})
}
export const updateOneCar = (carId,values,history) => async (dispatch) =>{
  const res = await axios.put(`/api/cars/${carId}`,values)
  history.push("/product");
  dispatch({type: UPDATE_ONECAR , payload: res.data})
}

export const deleteOnecar = (carId,history) => async (dispatch) =>{
  const res = await axios.delete(`/api/cars/${carId}`)
  history.push("/product");
  dispatch({type: DELETE_ONECAR , payload: res.data})
}

export const postPurchase = (values,history) => async (dispatch) => {
  const res = await axios.post("/api/purchase ", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};