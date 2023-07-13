import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import './App.css';

function App() {

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
          {/*Admin Component*/}
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
  );
}

export default App;
