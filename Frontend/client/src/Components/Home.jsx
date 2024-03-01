import React from "react";
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
import caption from "../images/Caption.png"

function Home(){
  return(
    <div>
      <div>
        <img src={logo} className="logo"/>
      </div>
      <div className="navbar">
        <a>HOME</a>
        <a>CONTACT</a>
        <a>ABOUT US</a>
        <img src={caption} className="caption"/>
      </div>
      <div>
        
      </div>
        
    </div>
  )
}

export default Home