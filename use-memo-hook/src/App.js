import logo from './logo.svg';
import './App.css';
 import React,{useState, useMemo} from 'react'

function App() {
   const [count,setCount]= useState(0);
   const [item,setItem]= useState(5);

  //  function MultiCount(){
  //    console.log("MultiCount");
  //    return count*2;
  //  }

  // Using useMemo and passing method inside useMemo and condition as count as if count is changing then it will call this method otherwise not. It doesn't get call even item value is changed because we havenot passed item in condition.
   const multiMemo=useMemo(function MultiCount(){
    console.log("MultiCount");
    return count*2;
  },[count]);
  return (
    <div className="App">
      <h1>usememo Hook</h1>
      {/* <h2>Multicount : {MultiCount()}</h2> */}
      
      <h2>Multicount : {multiMemo}</h2>
      <h2>Item:{item}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      {/* When I click on update item it call multicount method which should not happen */}
      <button onClick={()=>setItem(item+1)}>Update Item</button>
    </div>
  );
}

export default App;
