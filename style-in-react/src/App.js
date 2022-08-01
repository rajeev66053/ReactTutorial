import logo from './logo.svg';
import './App.css';
import './Style.css'; //For normal css file
import style from './Custom.module.css' ; // For module css file
import React from 'react';
function App() {
  const styleItem={color:'white',backgroundColor:'grey'}
  return (
    <div className="App">
      <h1 className='primary'>Style type 1 in React</h1>
      <h1 style={{color:'red',backgroundColor:'black'}}>Style type 2 in React</h1>
      <h1 style={styleItem}>Style type 3 in React</h1>
      <h1 className={style.success}>Style type 4 in React</h1>
    </div>
  );
}

export default App;
