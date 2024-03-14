import React from "react";
import logo from "../images/logo main edited.png";
import {Link} from "react-router-dom"
import caption from "../images/Caption.png"
import "./Navbar.css"

function Navbar(){
  return(
    <div id="navbar">
      <div className="logo-title">
        <img src={logo} className="logo"/>
        <p className="title"><span style={{color : "orange"}}>Feed</span><span style={{color : "white"}}>Forward</span> </p>
        <div className="nav-options">
          <h3>HOME</h3>
          <h3>SERVICES</h3>
          <h3>ABOUT US</h3>
        </div>
      </div>
      
      {/* <div className="navbar">
        <Link to={"/"} style={{textDecoration : "none" , color : "white"}}>
          HOME
        </Link>
        <Link to={"/contact"} style={{textDecoration : "none" , color : "white"}}>
          CONTACT
        </Link>
        <Link to={"/about"} style={{textDecoration : "none" , color : "white"}}>
          ABOUT
        </Link>

      </div>         */}
    </div>
  )
}

export default Navbar