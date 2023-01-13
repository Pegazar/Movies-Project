import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import App from "./App";

import { listReduce } from './redux/reducers/list-reducer';
import { moviesReducer } from './redux/reducers/reducer';

const reducers = combineReducers({
  movies: moviesReducer,
  list: listReduce,
  remove: listReduce
})

const GlobalStore = createStore(
  reducers
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={GlobalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
