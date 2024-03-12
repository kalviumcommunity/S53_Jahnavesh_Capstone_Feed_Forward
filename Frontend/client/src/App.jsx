import { useState } from 'react'
import './App.css'
import LoginButton from './ComponentLogin/Login'
import LogoutButton from './ComponentLogin/Logout'
import Profile from './ComponentLogin/Profile'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import AllRoutes from './AllRoutes/AllRoutes'
import DonateForm from './Components/DonateForm'
import Selection from './Components/Selection'
import Receive from './Components/Receive'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginButton />
      <LogoutButton />
      <hr />
      <Profile /> */}
      {/* <Navbar /> */}
      <AllRoutes />
      <Footer />
      {/* <Receive /> */}
      {/* <DonateForm /> */}
      {/* <Selection /> */}

    </>
  )
}

export default App 