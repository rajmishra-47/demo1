// import Button from '@mui/material/Button';
import './App.css';
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
// import Card1 from './components/Card';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import {createBrowserRouter} from 'react-router-dom' 
// import Mmat from './components/Mmat';
import {Link,Routes,Router,Route} from 'react-router-dom'
import Box1 from './components/box-1'
import Forms1 from './components/Forms1';
import Check1 from './components/Check1';
import Char1 from './components/Char1';
import Accordian from './components/Accordian';
import FileUpload from './components/FileUpload';
import Excel1 from './components/Excel1';
import ExportTextFile from './components/ExportTextFile';
import Forms2 from './components/Forms2';
import FormMaterialUI from './components/FormMaterialUI';
import Parent from './components/animex/Parent';
import CheckMarks from './components/CheckMarks';
let k=1

let s=""

function App() {


  const [display,setDisplay]=useState('')
  const [v1,v2]=useState('')


  let val=(e)=>{
    s+=(e.target.value)
    v2(s)
  }


  let cla=()=>{
    return setDisplay(eval(v1))
  }

  return (
    <>
    {/* <Box1/>
    <p>apple</p>

    <p>kk</p>

    <Forms1/>

    <Check1/>

    <Char1/>
    <Accordian/> */}
    {/* <FileUpload/>  */}

    {/* <Excel1/> */}


    {/* <ExportTextFile/> */}

<p>{display}</p>

<div className="gg1">
    <button value={1} onClick={val}>1</button>
    <button value={2} onClick={val}>2</button>
    <button value={3} onClick={val}>3</button>
    <button value={4} onClick={val}>4</button>
    <button value={5} onClick={val}>5</button>
    <button value={6} onClick={val}>6</button>
    <button value={7} onClick={val}>7</button>
    <button value={8} onClick={val}>8</button>
    <button value={9} onClick={val}>9</button>
    <button value={0} onClick={val}>0</button>
    <button value={'+'} onClick={val}>+</button>
    <button value={'-'} onClick={val}>-</button>
    <button value={'*'} onClick={val}>*</button>
    <button value={'/'} onClick={val}>/</button>
    <button onClick={cla}>Calculate</button>
    <button onClick={()=>{setDisplay('')}}>Clear</button>
</div>



<Forms2/>


<FormMaterialUI/>


<Parent/>
<CheckMarks/>

    </>
  );
}

export default App;
