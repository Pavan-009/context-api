import { useContext, useState } from "react";
import UserContext from "./Context/UserContext";

function Login() {
    const [userName,setuserName] = useState("");

    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='text'
        value = {userName}
        onChange={(e)=>setuserName(e.target.value)}
        placeholder='UserName'/>

        <input type='password'
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login