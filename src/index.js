import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// admin
const orders = (state = [], action) => {
  if (action.type === "SAVE_ORDERS") {
    // return orders
    return action.payload;
  }
  return state;
};

// pizzas
const pizzas = (state = [], action) => {
  // save pizzas to server
  if (action.type === "SAVE_PIZZAS") {
    // return pizzas
    return action.payload;
  }
  return state;
};


// cart reducer
const cart = (state = [], action) => {
  if (action.type === "SAVE_CART") {
    return [...state, action.payload];
    // remove pizzas
  } else if (action.type === "REMOVE_CART") {
    // TODO - logic to remove cart item
    return [...state, action.payload];
    // checkout 
  } else if (action.type === "CLEAR_CART") {
    return []
  }
  return state;
};

// contacts reducer 
const contacts = (state = [], action) => {
  // save contacts
  if (action.type === "SAVE_CONTACTS") {
    return [...state, action.payload + 1];
  } else if (action.type === "REMOVE_CONTACTS") {
    return []
  }
  return state;
};

// store
const store = createStore(
  combineReducers({
    pizzas,
    cart,
    orders,
    contacts,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

