import React from 'react';
import { useSelector } from 'react-redux';


// This page should not appear in the navigation bar. Eventually 
// the client would like to add authentication but for now, it will be
//  available to anyone with the url http://localhost:3000/admin. 
//  This page will display the name, time and order total for each of the 
//  orders placed.

function Admin() {

    const contacts = useSelector(store = store.contacts)
    console.log(contacts);

    return (
        <table>
         <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
         </tr>
         <tr>
            <td>row1</td>
         </tr>
         <tr>
            <td>row1</td>
         </tr>
        </table>
    )
}

export default Admin;

