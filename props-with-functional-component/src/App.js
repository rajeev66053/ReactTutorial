import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'

function App() {
  const [name,setName]=useState("rajeev")
  return (
    <div className="App">
     <h1>Props in React</h1>
     {/* outer curly braces is for jsx and inner for object in other props. */}
     {/* <Student name="Rajeev" email="rajeev@gamil.com" 
     other={{address:"Delhi",mobile:"454353"}}/> */}
     {/* <Student name={"Peter"}  email="peter@gamil.com"
     other={{address:"Agra",mobile:"444353"}}/>
     <Student name={"Anuj"}  email="anuj@gamil.com"
     other={{address:"Goa",mobile:"154353"}}/> */}

    <Student name={name} email="rajeev@gamil.com" 
     other={{address:"Delhi",mobile:"454353"}}/>

     <button onClick={()=>setName("Saroj")}>Update Name</button>
    </div>
  );
}

export default App;
