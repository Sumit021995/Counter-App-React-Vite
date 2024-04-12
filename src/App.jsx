import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  
  function addValue(){
    if(count >= 20) return;
    count++;
    setCount(count)
  }
 function SubValue (){
  if(!count) return;
    count--
    setCount(count)
  }

  function AddTwo(){
    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)
  }
  

  return (
    <>
      <div>
        <h1>Sumit , Vite-React , Counter App</h1>
        <h2>Counter Value: {count}</h2>
        <br/>
        <button onClick={addValue}>Add Value</button>
        <br/>
        <button onClick = {SubValue}>Subtract Value</button> 
        <br/>
        <button onClick = {AddTwo}>Add Two Value</button>


      </div>
    </>
  )
}

export default App
