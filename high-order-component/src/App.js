import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>HOC</h1>
      {/* cmp is component */}
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </div>
  );
}

function HOCRed(props){
  return <h1 style={{backgroundColor:'red',width:100}}><props.cmp /></h1>
}

function HOCGreen(props){
  return <h1 style={{backgroundColor:'green',width:100}}><props.cmp /></h1>
}

function Counter(){
  const [count,setCount]= useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  );
}

export default App;
