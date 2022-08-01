import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/login">Login</Link><br/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Navigate to="/" />}></Route>
          <Route path="/*" element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home(){
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my home page.</p>
    </div>
  )
}

function About(){
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my about page.</p>
    </div>
  )
}

function PageNotFound(){
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

export default App;
