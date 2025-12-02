import React, { useState } from 'react'
import '../styles/App.css'

const App = () => {
    const[input, setInput] = useState("");

    function Evaluate(){
      try {
      const result = eval(input);
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
    }
  return (
    <div clasName='Calculator'>
        <div className='input'>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <div className='buttons'>
            <button id='btn-clear' onClick={()=>{
              setInput('');
            }}>C</button>
            <button id='btn-div' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>/</button>
            <button id='btn-mult' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>*</button>
            <button id='btn-sub' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>-</button>
            <button id='btn-7' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>7</button>
            <button id='btn-8' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>8</button>
            <button id='btn-9' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>9</button>
            <button id='btn-plus' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>+</button>
            <button id='btn-4' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>4</button>
            <button id='btn-5' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>5</button>
            <button id='btn-6' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>6</button>
            <button id='btn-1' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>1</button>
            <button id='btn-2' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>2</button>
            <button id='btn-3' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>3</button>
            <button id='btn-equal' onClick={Evaluate}>=</button>
            <button id='btn-0' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>0</button>
            <button id='btn-dot' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>.</button>
            <button id='btn-space' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}></button>
        </div>
    </div>
  )
}

export default App