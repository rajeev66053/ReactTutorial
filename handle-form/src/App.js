import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName]=useState("");
  const [interest,setInterest]=useState("");
  const [TnC,setTnC]=useState(false);
  function handleData(e){
    e.preventDefault();
    console.log("all data",name,interest,TnC);
  }
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <form onSubmit={handleData}>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br/>
        <input type="checkbox" onChange={(e)=>setTnC(e.target.checked)} />
        <span>Agree with terms and conditions</span>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
