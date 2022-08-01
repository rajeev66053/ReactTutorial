import React from 'react'
function Profile(){
    const [loggedIn,setLoggedIn]=React.useState(2);

        return(
            <div>
                {
                    loggedIn==1?<h1>Welcome User1</h1>
                    :loggedIn==2?<h1>Welcome User2</h1>
                    :<h1>Welcome Guest</h1>
                }
                
            </div>
        )
   
}
export default Profile;