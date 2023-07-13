import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';


import { useDispatch } from 'react-redux';

function App() {

  // GET for pizza objects
  const fetchPizzaList = () => {

    axios.get('/api/pizza').then((response) => {
      console.log(response.data);

      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      })

    }).catch((err) => {
      console.log('Error GETing pizza list', err);
    });

  }; // end fetchPizzaList


  // load pizza list 
  useEffect(() => {
    fetchPizzaList();
  }, [])









  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

    </div>
  );
}

export default App;




