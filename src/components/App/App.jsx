import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';


import { useDispatch } from 'react-redux';

function App() {

  // const dispatch = useDispatch();

  // GET for pizza objects
  const fetchPizzaList = () => {

    axios.get('/api/pizza').then((response) => {
      console.log(response.data);

      // dispatch({
      //   type: 'SAVE_PIZZAS',
      //   payload: response.data
      // })

    }).catch((err) => {
      console.log('Error GETing pizza list', err);
    });

  }; // end fetchPizzaList


  // load pizza list 
  useEffect(() => {
    fetchPizzaList();
    fetchCompletedOrders();
  }, [])


    // GET for pizza objects
    const fetchCompletedOrders = () => {

      axios.get('/api/order').then((response) => {
        console.log('Orders list is:', response.data);
  
        // dispatch({
        //   type: 'SAVE_ORDERS',
        //   payload: response.data
        // })
  
      }).catch((err) => {
        console.log('Error GETing completed order list', err);
      });
  
    }; // end fetchCompletedOrders


    // POST object
    const sendOrderToServer = () => {
      
      axios.post('/api/order', )

      // {
      //   "customer_name": "Donatello",
      //   "street_address": "20 W 34th St",
      //   "city": "New York",
      //   "zip": "10001",
      //   "total": "27.98",
      //   "type": "Pickup",
      //   "pizzas": [{
      //     "id": "1",
      //     "quantity": "1"
      //   },{
      //     "id": "2",
      //     "quantity": "1"
      //   }]
      // }
    }








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




