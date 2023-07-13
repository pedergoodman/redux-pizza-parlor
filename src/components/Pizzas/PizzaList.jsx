import React from 'react'
import PizzaItem from './PizzaItem'
import {useSelector} from 'react-redux'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function PizzaList(){
const pizzas = useSelector(store => store.pizzas)

console.log('pizza list is:', pizzas);

    return(
        <>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {pizzas.map((pizza) => {
              return <PizzaItem key={pizza.id} pizza={pizza} />
            })}
        </Grid>
        </>
    )
}

export default PizzaList