import logo from './logo.svg';
import './App.css';
import React from 'react';
 import User from './User';

function App() {
  const users=[
    {name:'Rajeev',email:'rajeev@gamil.com',contact:'111'},
    {name:'Bruce',email:'bruce@gamil.com',contact:'121'},
    {name:'Peter',email:'peter@gamil.com',contact:'211'},
    {name:'Sam',email:'sam@gamil.com',contact:'314'}
  ];
  return (
    <div className="App">
      <h1>Reuse Component with List</h1>
      
      {
        users.map((item)=><User data={item}/>)
      }
    </div>
  );
}

export default App;
