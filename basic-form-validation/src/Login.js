import React,{useState} from 'react'

function Login(){
    const [user,setUser]= useState("");
    const [userErr,setUserErr]= useState(false);
    const [password,setPassword]= useState("");
    const [passwordErr,setPasswordErr]= useState(false);

    function userHandler(e){
        let item =e.target.value
        if(item.length<4){
            setUserErr(true);
        }else{
            setUserErr(false);
        }
        setUser(item);
    }
    function passwordHandler(e){
        let item =e.target.value
        if(item.length<4){
            setPasswordErr(true);
        }else{
            setPasswordErr(false);
        }
        setPassword(item);
    }
    function loginHandler(e){
        if(user.length<4 ||password<4){
            alert("Invalid data");
        }else{
            alert("All good");
        }
        e.preventDefault();
    }
    return(
        <div>
            <h1>Login </h1>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Enter user id" onChange={userHandler} />
                {userErr?<span>Invalid Data</span>:null}
                <br/><br/>
                <input type="password" placeholder="Enter user password"  onChange={passwordHandler} />
                {passwordErr?<span>Invalid Data</span>:null}<br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;