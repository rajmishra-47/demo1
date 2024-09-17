import React, { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CheckMarks() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  

  // useEffect to initialize random numbers only on component mount or when num1 and num2 change
  useEffect(() => {
    const newNum1 = Math.floor(Math.random() * 10);
    const newNum2 = Math.floor(Math.random() * 10);
    setNum1(newNum1);
    setNum2(newNum2);
    setNum3(newNum1 + newNum2);
  }, [num1, num2]); // run effect whenever num1 or num2 changes

  const handleChange = (e) => {
    if (parseInt(e.target.value) === num3) {
    //   alert('Correct');
      const newNum1 = Math.floor(Math.random() * 10);
      const newNum2 = Math.floor(Math.random() * 10);
      setNum1(newNum1);
      setNum2(newNum2);
      setNum3(newNum1 + newNum2);
    } else {
    //   alert('No');
      const newNum1 = Math.floor(Math.random() * 10);
      const newNum2 = Math.floor(Math.random() * 10);
      setNum1(newNum1);
      setNum2(newNum2);
      setNum3(newNum1 + newNum2);
    }
  };

  return (
    <>
      <p>
        {num1} + {num2} values are
      </p>

      <div className="options">
        <Stack spacing={2} direction="row">
          <Button variant="contained" value={num3} onClick={handleChange}>
            {num3}
          </Button>
          <Button variant="contained" value={Math.floor(Math.random() * 10)} onClick={handleChange}>
            {Math.floor(Math.random() * 10)}
          </Button>
        </Stack>
      </div>
    </>
  );
}
