import logo from './logo.svg';
import './App.css';
 import React,{createRef} from 'react'

class App extends React.Component {
  constructor(){
    super();
    this.inputRef=createRef();
  }
  componentDidMount(){
    // console.warn(this.inputRef.current.value="1000"); //It will insert the value on input field using ref.
  }
  getVal(){
    console.warn(this.inputRef.current.value); //It will fetch value from input field in console using ref.
    this.inputRef.current.style.color="red"; // It will change color of text in input field using ref.
    this.inputRef.current.style.backgroundColor="black";// It will change background color of input field using ref.
  }
  render(){
    return (
      <div className="App">
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    );
  }
}

export default App;
