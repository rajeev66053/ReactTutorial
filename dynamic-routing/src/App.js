import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link,Route, Routes} from 'react-router-dom'
import User from './User';

function App() {
  let users=[
    {name: 'Rajeev',id:1},
    {name: 'Bruce',id:2},
    {name: 'Peter',id:3},
    {name: 'Tony',id:4}
  ]
  return (
    <div className="App">
      <Router>
        
        <h1>Dynamic Routing</h1>
        {
          users.map((item,index)=>
          <div key={index}><Link to={"/user/"+item.id}>{item.name}</Link></div>
          )
        }
        <Routes>
          <Route path="/user/:id" element={<User />}> </Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
