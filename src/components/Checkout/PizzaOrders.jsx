import recat from 'react'

function Checkout(){


    // POST object
    const sendOrderToServer = () => {
      
        axios.post('/api/order', /* add data object here */).then((result) => {
            /* fill out */
        }).catch((err) => {
            console.log('Error sending order to server', err);
        });
  
        // This is what the shape of the object we need to send to the DB is. 
/*         {
          "customer_name": "Donatello",
          "street_address": "20 W 34th St",
          "city": "New York",
          "zip": "10001",
          "total": "27.98",
          "type": "Pickup",
          "pizzas": [{
            "id": "1",
            "quantity": "1"
          },{
            "id": "2",
            "quantity": "1"
          }]
        } */
      }





    return(
        <>
        <table>
            <thead>
                <td>

                </td>
            </thead>
        </table>
        </>
    )
}

export default Checkout 