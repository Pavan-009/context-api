import UserContext from "./Context/UserContext"
import {useContext} from 'react'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return <h1>Not Logged in</h1>
    }
  return (
   <>
    <h1>Profile : {user.userName}</h1>
    </>
  )
}

export default Profile