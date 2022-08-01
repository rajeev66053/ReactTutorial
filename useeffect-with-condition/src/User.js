import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react'

function User() {
    let [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("useEffect is called");
    },[]) //using [] in useEffect work as condition. Previously without [] useEffect method is called on every update request.. Now in console it wil call only once on start.

    useEffect(()=>{
        console.log("useEffect 2 is called");
    },[])
  return (
    <div className="App">
        <h1>User Component {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  );
}

export default User;
