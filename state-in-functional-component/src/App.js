// Without state the value will not be change in the dom 
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  // let data="React";
  const[data,setData] =useState("Rajeev") //Here Rajeev is a default value.

  function updateData(){
    // data="javascript"; //This value will not get updated on h1 tag using data variable we have to use the state.
    // alert(data);
    setData("Peter")
  }
  
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
