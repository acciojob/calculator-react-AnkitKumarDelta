import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");

  function appendValue(e) {
    setInput(input + e.target.innerText);
  }

  function clearInput() {
    setInput("");
  }

  function Evaluate() {
    try {
      setInput(String(eval(input)));
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="Calculator">
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button id="clear" onClick={clearInput}>C</button>
        <button id="divide" onClick={appendValue}>/</button>
        <button id="multiply" onClick={appendValue}>*</button>
        <button id="btn--" onClick={appendValue}>-</button>

        <button id="btn-7" onClick={appendValue}>7</button>
        <button id="btn-8" onClick={appendValue}>8</button>
        <button id="btn-9" onClick={appendValue}>9</button>
        <button id="plus" onClick={appendValue}>+</button>

        <button id="btn-4" onClick={appendValue}>4</button>
        <button id="btn-5" onClick={appendValue}>5</button>
        <button id="btn-6" onClick={appendValue}>6</button>
        <button id="equal" onClick={Evaluate}>=</button>

        <button id="btn-1" onClick={appendValue}>1</button>
        <button id="btn-2" onClick={appendValue}>2</button>
        <button id="btn-3" onClick={appendValue}>3</button>

        <button id="btn-0" onClick={appendValue}>0</button>
        <button id="dot" onClick={appendValue}>.</button>
      </div>
    </div>
  );
};

export default App;
