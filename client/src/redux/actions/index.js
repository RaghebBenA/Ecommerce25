import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_CARS } from "./types";
import {FETCH_ONECAR} from "./types"
 
export const fecthUser = () => async (dispatch) => {
  const res = await axios.get("api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const postCar = (values) => async (dispatch) => {
  const res = await axios.post("/api/cars ", values);
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchCars = () => async (dispatch) => {
  const res = await axios.get("api/cars");
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchOneCar = (carId) => async (dispatch) =>{
  const res = await axios.get(`/api/cars/${carId}`)
  dispatch({type: FETCH_ONECAR , payload: res.data})
}