import React, {useState} from 'react'
import axios from 'axios'

function CustomerForm(){
    let [pizzaToAdd, setPizzaToAdd] = useState({})

    return(
        <>
            <h1> Step 2: Customer Infromation</h1>
            <input type= 'text' placeholder='name'/>
            <input type= 'text' placeholder='Street Adress'/>
            <input type= 'text' placeholder='City'/>
            <input type= 'text' placeholder='Zip'/>
            <button type=''>Pickup</button>
            <button type=''>Delivery</button>
        </>
    )
}

export default Form