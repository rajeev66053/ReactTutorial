import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Table} from 'react-bootstrap';

function App() {
  const users=[
    {name:'Rajeev',email: 'rajeev@gmail.com',address:[
      {hn:'101',city:'Kathmandu',country:'Nepal'},
      {hn:'10',city:'Bhaktapur',country:'Nepal'},
      {hn:'15',city:'lalitpur',country:'Nepal'},
      {hn:'21',city:'Kavre',country:'Nepal'},
    ]},
    {name:'Peter',email: 'peter@gmail.com',address:[
      {hn:'101',city:'Kathmandu',country:'Nepal'},
      {hn:'10',city:'Bhaktapur',country:'Nepal'},
      {hn:'15',city:'lalitpur',country:'Nepal'},
      {hn:'21',city:'Kavre',country:'Nepal'},
    ]},
    {name:'Bruce',email: 'bruce@gmail.com',address:[
      {hn:'101',city:'Kathmandu',country:'Nepal'},
      {hn:'10',city:'Bhaktapur',country:'Nepal'},
      {hn:'15',city:'lalitpur',country:'Nepal'},
      {hn:'21',city:'Kavre',country:'Nepal'},
    ]},
    {name:'Sam',email: 'sam@gmail.com',address:[
      {hn:'101',city:'Kathmandu',country:'Nepal'},
      {hn:'10',city:'Bhaktapur',country:'Nepal'},
      {hn:'15',city:'lalitpur',country:'Nepal'},
      {hn:'21',city:'Kavre',country:'Nepal'},
    ]}
  ];
  return (
    <div className="App">
      <h1>List with Nested Array</h1>

      <Table striped variant='dark'>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
        </tr>
        {
          users.map((item,index)=>
            //  Each child in a list should have a unique "key" prop. Thats why we need to use key in each row to distinguish each row.
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {/*  */}
                <Table striped variant='dark'>
                  <tbody>
                  {
                    item.address.map((data)=>
                      <tr>
                        <td>{data.hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    )
                  }
                  </tbody>
                </Table>
              </td>
            </tr>
            )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
