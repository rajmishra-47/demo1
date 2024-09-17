import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { useState } from 'react';

export default function FormMaterialUI() {
    const [name,setName]=useState('')
    const [error,setError]=useState(false) 

    let handleSubmit=(e)=>{

        e.preventDefault();

        if(name){
            setError(true)
        }

        else{
            setError(false)
        }
    }


    let handleChange=(e)=>{

        setName(e.target.value)

        if(name){
            setError(false)
        }
        else{
            setError(true)
        }
    }



    return (
    <div>
        <form onSubmit={handleSubmit}>
        <FormControl>
    <FormLabel required>Enter Name</FormLabel>
    <TextField  value={name} onChange={handleChange} error={error} helperText={error?'This is a required field':''}></TextField>
    <Button type='submit'>Submit</Button>
</FormControl>
        </form>
     
    </div>
  )
}
