import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react'

function User(props) {
   
    useEffect(()=>{
        console.log("useEffect is called");
    },[]) //using [] in useEffect work as condition. Previously without [] useEffect method is called on every update request.. Now in console it wil call only once on start.
  return (
    <div className="App">
        <h1>User Component {props.countProps}</h1>
    </div>
  );
}

export default User;