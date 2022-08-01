function User(props)
{
    const name="Rajeev";
    return (
        <div>
            <h1>User Name is:{name} </h1>
            <button onClick={()=>props.getData(name)}>Click Me</button>
        </div>
    )
}
export default User;