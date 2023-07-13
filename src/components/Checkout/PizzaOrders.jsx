import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';

function PizzaOrders() {
  // POST object
  const sendOrderToServer = () => {
    axios
      .post("/api/order" /* add data object here */)
      .then((result) => {
        /* fill out */
      })
      .catch((err) => {
        console.log("Error sending order to server", err);
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
  };

  function createData(name, cost) {
    return { name, cost };
  }  
  const rows = [
    createData('Frozen yoghurt', 10)
  ];

  return (
    <>
      <div className="customer-info">
        <h2>Step 3: Checkout</h2>
        <p>name <br/>
        address <br/>
        city</p>
      </div>

      <div className="type">For Delivery</div>

      <div>
        <TableContainer align="center">
          <Table  sx={{ maxWidth: 600, "&:last-child td, &:last-child th": { border: 1 } }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="center">Name</TableCell>
                <TableCell align="center">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
      
                  sx={{ maxWidth: 600, "&:last-child td, &:last-child th": { border: 1 } }}
                >
                  <TableCell align="center">
                    {row.name} 
                  </TableCell>
                  <TableCell  align="center">
                    {row.cost} 
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="checkout-button">
      <Button variant="contained">CHECKOUT</Button>
      </div>
    </>
  );
}

export default PizzaOrders;
