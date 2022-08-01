import logo from './logo.svg';
import './App.css';
 import React,{useRef} from 'react'

function App() {
  let nameRef=useRef(null);
  let passwordRef=useRef(null);
  function submitForm(e){
    e.preventDefault();
    console.warn("input 1 value is: ",nameRef.current.value); //using useRef
    console.warn("input 2 value is: ",passwordRef.current.value);
    let email=document.getElementById("email").value; //using javascript way
    console.warn("input 3 value is: ",email);
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm}>
        <input ref={nameRef} type="text" /><br/><br/>
        <input ref={passwordRef} type="text" /><br/><br/>
        <input id="email" type="text" /><br/><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
