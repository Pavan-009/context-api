import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextprovider from './Components/Context/UserContextProvider'
function App() {

  return (
    <UserContextprovider>
      <h1>This is for context api</h1>
      <Login/>
      <Profile/>
    </UserContextprovider>
  )
}

export default App
