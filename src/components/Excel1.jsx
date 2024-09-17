import React,{useState} from 'react'
import * as XLSX from 'xlsx'
import { Bar, Doughnut, Line } from "react-chartjs-2";

export default function Excel1() {
    
    const [file,setFile]=useState({})


    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
        console.log(parsedData.map(e=>e.Price));
        };
      }

// const dispData=()=>{

//     console.log(file);
// }


  return (
    <div>
        <form action="">
            <input type="file" name="" id="" accept='.xlsx, .csv' onChange={handleFileUpload} />
        </form>

        <button >Show</button>



        
    </div>
  )
}
