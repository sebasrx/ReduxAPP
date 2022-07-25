import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./routes/App";

const initialState = {
  favoriteCharacters: [],
  sectionActive: "Characters",
};

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
