import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_CARS } from "./types";
import { FETCH_ONECAR } from "./types";
import { DELETE_ONECAR } from "./types";
import { UPDATE_ONECAR } from "./types";
import {
  UPDATE_USER,
  FETCH_PURCH,
  FETCH_ONEUSER,
  ADD_PURCHASE,
  DELETE_PURCHASE,
  DELETE_AllPURCHASE,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT
} from "./types";

export const fecthUser = () => async (dispatch) => {
  const res = await axios.get("api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fecthOneUser = (userId) => async (dispatch) => {
  const res = await axios.get(`/api/user/${userId}`);
  dispatch({ type: FETCH_ONEUSER, payload: res.data });
};

export const updateUser = (userId, values, history) => async (dispatch) => {
  const res = await axios.put(`/api/user/${userId}`, values);

  history.push(`/`);

  dispatch({ type: UPDATE_USER, payload: res.data });
};

export const postCar = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/cars ", values);
  history.push("/product");
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchCars = () => async (dispatch) => {
  const res = await axios.get("/api/cars");
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchOneCar = (carId) => async (dispatch) => {
  const res = await axios.get(`/api/cars/${carId}`);
  dispatch({ type: FETCH_ONECAR, payload: res.data });
};
export const updateOneCar = (carId, values, history) => async (dispatch) => {
  const res = await axios.put(`/api/cars/${carId}`, values);
  history.push("/product");
  dispatch({ type: UPDATE_ONECAR, payload: res.data });
};

export const deleteOnecar = (carId, history) => async (dispatch) => {
  const res = await axios.delete(`/api/cars/${carId}`);
  history.push("/product");
  dispatch({ type: DELETE_ONECAR, payload: res.data });
};

export const fetchPurchase = () => async (dispatch) => {
  const res = await axios.get("/api/purchase");
  dispatch({ type: FETCH_PURCH, payload: res.data });
};

export const postPurchase = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/purchase ", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addTopurchase = (car) => (dispatch) => {
  dispatch({
    type: ADD_PURCHASE,
    payload: car
  });
};

export const deletePurchase = (carId) => (dispatch) =>{
  dispatch({
    type: DELETE_PURCHASE,
    payload: carId
  })
}

export const deleteAllPurchase = (list) =>(dispatch) =>{
  dispatch({
    type: DELETE_AllPURCHASE,
    payload: list
  })
}


export const increamentCount = () => (dispatch) =>{
  dispatch({
    type: INCREMENT_COUNT,
  })
}

export const decrementCount = () => (dispatch) =>{
  dispatch({
    type: DECREMENT_COUNT
  })
}

export const resetCount = () => (dispatch) =>{
  dispatch({
    type: RESET_COUNT
  })
}