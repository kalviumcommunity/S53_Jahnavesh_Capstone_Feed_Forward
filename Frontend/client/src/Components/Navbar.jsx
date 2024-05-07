import React, { useContext } from "react";
import logo from "../images/logo main edited.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LoginButton from "../ComponentLogin/Login";
import LogoutButton from "../ComponentLogin/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "./ParentContext";

function Navbar() {
  const { isAuthenticated } = useAuth0();
  const {signin} = useContext(AppContext)

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
            <Link to={"/signin"}>            
              <button>
                Login
              </button>
            </Link>

        </div>
      </div>  
    </div>
  );
}

export default Navbar;
