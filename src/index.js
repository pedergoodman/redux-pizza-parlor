import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// admin
// [{customer_name: , time: , type: , total: }]
const orders = (state = [], action) => {
  if (action.type === "SAVE_ORDERS") {
    // return orders
    return action.payload;
  }
  return state;
};

// pizzas
// [{name: , description: , price: }]
const pizzas = (state = [], action) => {
  // save pizzas to server
  if (action.type === "SAVE_PIZZAS") {
    // return pizzas 
    // {id: , quantity: }
    return action.payload;
  }
  return state;
};

// contacts reducer 
// [{customer_name: , street_address: , city: , zip: , type: }]
const contacts = (state = [], action) => {
  // save contacts
  if (action.type === "SAVE_CONTACTS") {
    return [...state, action.payload + 1];
  } else if (action.type === "REMOVE_CONTACTS") {
    return [...state, action.payload - 1]
  }
  return state;
};

// [{{contact},{pizza}}]
// cart reducer
const cart = (state = {}, action) => {
    // save pizzas
    const currentCart = state[action.payload] || 0
    if (action.type === "SAVE_CART") {
      return {...state, [action.payload]: currentCart + 1 };
      // remove pizzas
    } else if (action.type === "REMOVE_CART") {
      return {...state, [action.payload]: currentCart - 1};
      // checkout 
    } else if (action.type === "CLEAR_CART") {
      return {...state, [action.payload]: 0};
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
