import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import User from './User'

function App() {
  let [count,setCount]=useState(0);
  return (
    <div className="App">
        <h1>useEffect with condition</h1>
        <User countProps={count} />
        <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  );
}

export default App;
