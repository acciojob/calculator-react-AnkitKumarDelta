import React, { useState } from 'react'
import '../styles/App.css'

const App = () => {
    const[input, setInput] = useState("");

    function Evaluate(){
      setInput(eval(input));
    }
  return (
    <div clasName='calculator'>
        <div className='input'>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <div className='buttons'>
            <button className='btn-clear' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>C</button>
            <button className='btn-div' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>/</button>
            <button className='btn-mult' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>*</button>
            <button className='btn-sub' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>-</button>
            <button className='btn-seven' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>7</button>
            <button className='btn-oneight' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>8</button>
            <button className='btn-nine' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>9</button>
            <button className='btn-plus' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>+</button>
            <button className='btn-four' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>4</button>
            <button className='btn-five' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>5</button>
            <button className='btn-six' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>6</button>
            <button className='btn-one' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>1</button>
            <button className='btn-two' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>2</button>
            <button className='btn-three' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>3</button>
            <button className='btn-equal' onClick={Evaluate}>=</button>
            <button className='btn-zero' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>0</button>
            <button className='btn-dot' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}>.</button>
            <button className='btn-space' onClick={(e)=>{
              let val = input+e.target.innerText;
              setInput(val);
            }}></button>
        </div>
    </div>
  )
}

export default App