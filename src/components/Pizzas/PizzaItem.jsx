import react from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import './PizzaItem.css'


// import from store


function PizzaItem({ pizza }) {
    const dispatch = useDispatch()

    // sets default to false
    const [isAdded, setIsAdded ] = useState(false);

    console.log('pizza is:', pizza);

    return (
        <>
            <Grid xs={2} sm={2} md={3} key={pizza.id}>
                <Card sx={{ maxWidth: 345, minHeight: 430 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={pizza.image_path}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pizza.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {pizza.description}
                        </Typography>
                    </CardContent>
                    <CardActions className='add-remove-container'>
                        {!isAdded ? 
                            <Button size="medium">ADD</Button> : 
                            <Button size="medium">REMOVE</Button>
                        }

                        
                        
                    </CardActions>
                </Card>
            </Grid>


        </>
    )
}

export default PizzaItem