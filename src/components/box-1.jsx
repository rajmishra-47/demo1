import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';

let textContainer=[]
let a=false
let b=false
export default function Box1() {

    const [text,setText]=useState('')
    const [text2,prevtext]=useState('')

    useEffect( async ()=>{
            const result= await fetch('https://catfact.ninja/fact').then(result=>result.json()).then(data=>{
                setText(data.fact)
                textContainer.push(data.fact)
            }).catch(err=>setText(err.message));

    },[])

    const getData=async ()=>{
        a=true
        await fetch('https://catfact.ninja/fact').then(result=>result.json()).then(data=>{
            setText(data.fact)
            textContainer.push(data.fact)
    }).catch(err=>setText(err.message));
    // a=false
    }

    const preData=async()=>{
        a=false
        b=true
        prevtext(textContainer[textContainer.length-2])
        textContainer.pop()
    }

    return (
    <div>
         <div>
     <Card style={{ width: 'auto',height:'auto' }}>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          {a && text},{b && text2}
        </Card.Text>
        <div className="buttons1">
        <Button onClick={getData} variant="primary">Next</Button>
        <Button onClick={preData} variant="primary">Prev</Button>
        </div>
      
      </Card.Body>
    </Card>
    </div>
    <p>Hello</p>
    <p> {textContainer[textContainer.length-2]}</p>
    </div>
  )
}
