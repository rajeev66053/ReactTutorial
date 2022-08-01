import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [val,setVal]=useState("")
  // const [item,setItem]=useState("")
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
      {/* <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} /> */}
      <h1>{val}</h1>
    </div>
  );
}

export default App;
