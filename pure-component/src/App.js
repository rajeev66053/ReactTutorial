import logo from './logo.svg';
import './App.css';
 import React, { PureComponent } from 'react'

class App extends PureComponent {
   constructor(){
     super();
     this.state={
       count:1
     }
   }
  render(){
    console.log("re render"); //By default this render method is call in every onclick event even the value is not changing by extending class with  Component .We can fix this issue by extending PureComponent
    return (
      <div className="App">
        <h1>Pure Component {this.state.count}</h1>
        {/* <button 
        onClick={()=>this.setState({count: this.state.count+1})}>Update Count</button> */}
{/* using the same value in on click it will not call the render method using PureComponent */}
<button 
        onClick={()=>this.setState({count: this.state.count})}>Update Count</button>
      </div>
    );
  }
}

export default App;
