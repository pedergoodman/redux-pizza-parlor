import React from 'react'
import PizzaItem from './PizzaItem'
import {useSelector} from 'react-redux'

function PizzaList(){
const pizzas = useSelector(store => store.pizzas)
    return(
        <>
        </>
    )
}

export default PizzaList