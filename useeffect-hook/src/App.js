import logo from './logo.svg';
import './App.css';
// import React from 'react' //If we dont import useEffect then we have to write like 
// React.useEffect(()=>{

// })
import React,{useEffect, useState} from 'react'

function App() {
  const [count,setCount]=useState(0);
  //This useEffect is working as a componentDidMount because it will show console log on start.It will also work as componentDidUpdate as it will call on update.
  useEffect(()=>{
    console.log("useEffect");
    })
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  );
}

export default App;
