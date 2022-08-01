import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: "Rajeev",
      number: 1
    }
  }
  updateData(){ //we don't need function keyword in method inside class
    alert("Hello")
    this.setState({data:"Peter"})
    this.setState({number:this.state.number+1})
  }
  render(){
    return (
      <div className="App">
      <h1>{this.state.number}</h1>
        <h1>{this.state.data}</h1>
        {/* without arrow funtion we will get error */}
        <button onClick={()=>this.updateData()}>Update Data</button>
      </div>
    );
  }
}

export default App;
