
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';



function App() {
  const [principal,setPrincipal]=useState()
  const [interest,setInterest] = useState(0)
  const [rate,setRate] = useState()
  const [year,setYear]=useState()
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)

const getValidate=(e)=>
{
  const {name,value}=e.target
/*   console.log(name,value);
 */ 
    if(!!value.match(/^[0-9]*.?[0-9]+$/))
    if(name==='principle'){
      setPrincipal(value)
      setIsPrinciple(true)
    }
    else if (name === "rate") {
      setRate(value)
      setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
        }
    else{
      if(name==='principle')
      {
      setPrincipal(value)
      setIsPrinciple(false)
      }
      else if(name==='rate')
      {
        setRate(value)
        setIsRate(false)
        }
        else
        {
          setYear(value)  
          setIsYear(false)
        }
    }
  //setPrincipal(value)
}

const handleSubmit=(e)=>
{
  e.preventDefault();
  if(!principal || !rate || !year)
  {
    alert("Please fill the form")
  }
  else
  {
   // alert('submitted')
   setInterest(principal*rate*year/100)
  }
}

const handleReset=(e)=>
{
  setPrincipal(0)
  setInterest(0)
  setRate(0)
  setYear(0)
}


  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-light p-5 rounded'>
      <h1 >Simple Interest App</h1>
    <p> Calculate simple interest easily</p>
    <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'>
   
 <h1>₹{''}{interest}</h1>
 <p>Total Simple interest</p>
  </div>
  <form className='mt-4'>
    <div className='mb-3' >
    <TextField name='principle' value={principal || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" />
    </div>
    {
      !isPrinciple &&
      <div>
        <p className='text-danger fw-bolder'>*Invalid input</p>
      </div>
    }
    <div className='mb-3'>
    <TextField name='rate' value={rate || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
    </div>
    {
      !isRate &&
      <div>
        <p className='text-danger fw-bolder'>*Invalid input</p>
      </div>
    }
    <div className='mb-3'>
    <TextField name='year' value={year||""} onChange={(e)=>getValidate(e)}  className='w-100' id="outlined-basic" label="Year" variant="outlined" />
    </div>
    {
      !isYear &&
      <div>
        <p className='text-danger fw-bolder'>*Invalid input</p>
      </div>
    }
    <Stack direction="row" spacing={2} className='mt-3'>
    <Button onClick={handleSubmit} disabled={isPrinciple && isRate && isYear?false:true} variant="contained" style={{width:"200px",height:'50px'}} >Calculate</Button>
<Button onClick={handleReset} variant="outlined" style={{width:"200px",height:'50px'}}>Reset</Button>
</Stack>
  </form>
      </div>
    </div>
  );
}

export default App;
//Material ui