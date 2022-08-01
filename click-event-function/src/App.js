import logo from './logo.svg';
import './App.css';

let data="Hello World !";
function App() {
  function apple(){
    // It will only change the value in alert not in h1 tag below. To change the value on both we need to use state and props.
    data="popup";
    alert(data);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      {/* Dont put paranthesis after function name in onClick otherwise it will not work. */}
      <button onClick={apple}>Click Me</button>
      {/* If we have to write method in onClick with parenthesis we have to use arrow method */}
      {/* <button onClick={()=>alert("test")}>Click Me</button> */}
    </div>
  );
}

export default App;
