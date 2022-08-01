import logo from './logo.svg';
import './App.css';
 import React from 'react';
 import {Table} from 'react-bootstrap'; //Using bootstrap table

function App() {
  const users=[
    {name:'Rajeev',contact:'000',email: 'rajeev@gmail.com'},
    {name:'Peter',contact:'111',email: 'peter@gmail.com'},
    {name:'Bruce',contact:'101',email: 'bruce@gmail.com'},
    {name:'Sam',contact:'201',email: 'sam@gmail.com'}
  ];
  users.map((item)=>{
    console.log("My name is ",item)
  })

  for(let i=0;i< users.length;i++){
    console.log("My name is ",users[i]);
  }
  return (
    <div className="App">
      <h1>Handle Array with List without bootstrap</h1>

      <table border="1">
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
          users.map((item,index)=>
            //  Each child in a list should have a unique "key" prop. Thats why we need to use key in each row to distinguish each row.
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
            )
        }
        </tbody>
      </table>


      <h1> List with bootstrap</h1>

      <Table striped variant='dark'>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
          users.map((item,index)=>
            item.contact==='111'?
            //  Each child in a list should have a unique "key" prop. Thats why we need to use key in each row to distinguish each row.
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
            :null
            )
        }
        </tbody>
      </Table>
     
    </div>
  );
}

export default App;
