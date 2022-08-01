//If we exports from React.Component we don't need to import component
// import React from 'react'  
// class User extends React.Component{

// }
import React, { Component } from 'react'

class User extends Component{
    render(){
        return (
            <div>
                <h1>Hello User!</h1>
            </div>
        )
    }
}

export default User;
