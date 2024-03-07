import React from "react";
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
import caption from "../images/Caption.png"
import AllRoutes from "../AllRoutes/AllRoutes";

function Navbar(){
  return(
    <div>

      <div>
        <img src={logo} className="logo"/>
      </div>
      
      <div className="navbar">
        <Link to={"/"} style={{textDecoration : "none" , color : "black"}}>
          HOME
        </Link>
        <Link to={"/contact"} style={{textDecoration : "none" , color : "black"}}>
          CONTACT
        </Link>
        <Link to={"/about"} style={{textDecoration : "none" , color : "black"}}>
          ABOUT
        </Link>

        <img src={caption} className="caption"/>

      </div>        
    </div>
  )
}

export default Navbar