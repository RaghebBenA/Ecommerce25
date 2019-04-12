import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import reducer from "./redux/reducer"
import App from "./Components/App";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

window.axios = axios

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store} >
    <App  />
  </Provider>,
  document.querySelector("#root")
);
