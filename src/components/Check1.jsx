import React from 'react'
import { useState } from 'react'
export default function Check1() {

    const [val,setVal]=useState()
    const [a,b]=useState()
    let bbb=[]
    const [arr, setArr] = useState([]);
    let handleChange=(e)=>{
        e.preventDefault()
        // arr.push(e.target.value)
        setVal(e.target.value)
    }

    let disp=()=>{
        setArr([...arr, val])
        console.log(val,arr);
    }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={disp}>Click me </button>
    </div>
  )
}
