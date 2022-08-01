function Student(props){
    console.log(props);
   return(
       <div style={{backgroundColor:'skyblue',margin:20}}>
           <h1>Hello {props.name}</h1>
           <h2>Email:{props.email}</h2>
           <h2>Address:{props.other.address}</h2>
           <h2>Mobile:{props.other.mobile}</h2>
       </div>
   )
}

export default Student;