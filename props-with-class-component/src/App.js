import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"Rajeev"
    }
  }
  render(){
      return (
        <div className="App">
          <h1>Hello World !</h1>
          <Student name={this.state.name} email="rajeev@gamil.com" />
          {/* <Student name="Hari" email="hari@gamil.com" /> */}
          <button onClick={()=>this.setState({name:"Peter"})}>Update Name</button>
        </div>
      );
    }
}

export default App;
