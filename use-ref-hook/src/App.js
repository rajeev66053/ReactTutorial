import logo from './logo.svg';
import './App.css';
 import React,{useRef} from 'react'

function App() {
  let inputRef=useRef(null);
  function controlInput(){
    //inputRef.current.value="abc"; //set value in input field as abc
    // inputRef.current.style.color="red"; //change text color to red in input field
    // inputRef.current.style.display="none"; //hide input field
    inputRef.current.focus(); //add focus in input field
  }
  return (
    <div className="App">
      <h1>UseRef Hook</h1>
      {/* InputRef control input element */}
      <input type="text" ref={inputRef}/>
      <button onClick={controlInput}>Handle Input</button>
    </div>
  );
}

export default App;
