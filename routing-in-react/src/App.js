import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <h1>Routing In React</h1>
          <Nav/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
          </Routes>
        
        
      
    </div>
  );
}

export default App;
