import logo from './logo.svg';
import './App.css';
//  import React from 'react'
//  import React,{Fragment} from 'react'

function App() {
  return (
    //First way using React.Fragment
    //We can use react fragment to use multiple html tag without wrapper div.
    // <React.Fragment>
    //   <h1>Header1</h1>
    //   <h2>Header2</h2>
    //   <h3>Header3</h3>
    // </React.Fragment>

//Second way using Fragment tag by importing Fragment from react
      // <Fragment>
      //   <h1>Header1</h1>
      //   <h2>Header2</h2>
      //   <h3>Header3</h3>
      // </Fragment>

      //Third way using empty tag
      <>
        <h1>Header1</h1>
        <h2>Header2</h2>
        <h3>Header3</h3>
      </>
  );
}

export default App;
