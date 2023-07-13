import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin';


import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  // GET for pizza objects
  const fetchPizzaList = () => {

    axios.get('/api/pizza').then((response) => {
      console.log(response.data);

      dispatch({
        type: 'SAVE_PIZZAS',
        payload: response.data
      })

    }).catch((err) => {
      console.log('Error GETing pizza list', err);
    });

  }; // end fetchPizzaList



  // GET for completeed
  const fetchCompletedOrders = () => {

    axios.get('/api/order').then((response) => {
      console.log('Orders list is:', response.data);

      // send order data to store
      dispatch({
        type: 'SAVE_ORDERS',
        payload: response.data
      })

    }).catch((err) => {
      console.log('Error GETing completed order list', err);
    });
  }; // end fetchCompletedOrders


  // load pizza list and orders list
  useEffect(() => {
    fetchPizzaList();
    fetchCompletedOrders();
  }, [])






  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Router>
        <ul className="nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/userinfo">User Info</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/home">
          {/* <Pizzas component goes here> */}
        </Route>
        <Route exact path="/userinfo">
          {/* <Form component here> */}
        </Route>
        <Route exact path="/checkout">
          {/* <Checkout goes here> */}
        </Route>

        {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
      </Router>
    </div>
  )
}

export default App;




