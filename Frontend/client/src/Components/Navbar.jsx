import React, { useContext } from "react";
import logo from "../images/logo main edited.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import LoginButton from "../ComponentLogin/Login";
import LogoutButton from "../ComponentLogin/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "./ParentContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";



function Navbar() {
  const { isAuthenticated } = useAuth0();
  const {signin,setSignin} = useContext(AppContext);
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      // alert(`${user} hello`)
      // alert(`hii ${user}`)
      // console.log("hii")
      alert("hello")
        setSignin(false)
        await signOut(auth)
        console.log("logout successful")
        // Navigate('/login')
        navigate("/")
        setUser({})
    } catch (error) {
        console.log(error);
        }
    };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="navbar">
      <div className="logo-title">
        <img src={logo} className="logo" alt="Logo" />
        <p className="title">
          <span style={{ color: "orange" }}>Feed</span>
          <span style={{ color: "white" }}>Forward</span>{" "}
        </p>
        <div className="nav-options">
          <h3><Link to="/" style={{textDecoration:"None",color:"white"}}>HOME</Link></h3>
          <h3 className="services_option" onClick={scrollToServices}>SERVICES</h3>
          <h3 className="about_option" onClick={scrollToAbout}>ABOUT</h3>
           {signin ? (
            <button onClick={handleSignOut} className="logout_button_nav">
              LOGOUT
            </button>
           ):            
              <button className="login_button_nav" onClick={()=>{navigate("/signup")}}>
                LOGIN
              </button>
}

        </div>
      </div>  
    </div>
  );
}

export default Navbar;
