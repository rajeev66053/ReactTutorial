import { useParams } from "react-router-dom";
function User(){
    const {id}=useParams();

    console.log(id);
    return(
        <div>
            <p>User Id: {id} </p>
        </div>
    )
}
export default User;