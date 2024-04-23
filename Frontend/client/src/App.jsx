import { useState } from 'react'
import './App.css'
import "./Components/Navbar.css"
import "./Components/Footer.css"
import LoginButton from './ComponentLogin/Login'
import LogoutButton from './ComponentLogin/Logout'
import Profile from './ComponentLogin/Profile'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import AllRoutes from './AllRoutes/AllRoutes'
import DonateForm from './Components/DonateForm'
import Receive from './Components/Receive'
import Footer from './Components/Footer'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginButton />
      <LogoutButton />
      <hr />
      <Profile /> */}
      {/* <Navbar /> */}
      {/* <Home/> */}
      <AllRoutes />
      {/* <Receive /> */}
      {/* <DonateForm /> */}

    </>
  )
}

export default App 