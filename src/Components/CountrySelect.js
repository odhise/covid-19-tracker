import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState} from "react";
import { useEffect } from "react";





const CountrySelect=({Countries, SetSelectedCountries})=>{


    const handleChange = (event) => {
    
    };
    return(

        <div>
  
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            
            onChange={handleChange} >
        
   {Countries.map(country=><MenuItem key={country.ISO2} value={`${country.ISO2} : ${country.Country}`}>({country.ISO2}:{country.Country})</MenuItem>)}

          </Select>
        </FormControl>
      </div>
       
        


  )
}























export default CountrySelect;