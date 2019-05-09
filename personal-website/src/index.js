import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";

import reducer from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

import axios from "axios";

const store = createStore(reducer);

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
