import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';




export default function Char1() { 

    const [area,setArea]=useState('');

let handleChange= (e)=>{

    e.preventDefault()
    setArea(e.target.value);
}
  return (
    <div>
      
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control onChange={handleChange} as="textarea" aria-label="With textarea" />
      </InputGroup>

      <p>{area.length} Number of characters</p>
      <p>{area.split(' ').length-1} Number of white spaces</p>
    </div>
  )
}
