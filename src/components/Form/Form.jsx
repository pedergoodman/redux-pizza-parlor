import React, {useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Form.css'

function Form() {
let [pizzaToAdd, setPizzaToAdd] = useState({})

const [type, setType] = useState('true');

        const handleTypeChange = (event) => {
          setValue(event.target.type);
        };
  

// DISPLAY 
    return(
        <>
           <h2> Step 2: Customer Infromation</h2>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='text'>
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline
        />
         <TextField
          id="outlined-textarea"
          label="Address"
          placeholder="Street Address"
          multiline
        />
         <TextField
          id="outlined-textarea"
          label="City"
          placeholder="City"
          multiline
        />
         <TextField
          id="outlined-textarea"
          label="Zip"
          placeholder="Zip Code"
          multiline
        />
      </div>
      <div className='radio-button'>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={type}
          onChange={handleTypeChange}
        >
          <FormControlLabel value="true" control={<Radio />} label="Pickup" />
          <FormControlLabel value="false" control={<Radio />} label="Delivery" />
        </RadioGroup>
      </FormControl>
      </div>
      <div className='submit-button'>
      <Button variant="contained">NEXT</Button>
      </div>
    </Box>
    </>
    )
}

export default Form