import React from "react";
import logo from "../images/logo main edited.png";
import {Link} from "react-router-dom"
 

export default function Postreceive(){
  return (
    <div>
      <div className="confirmation">
        <p className="confirm_text">Are you sure to receive the food .</p>
        <div className="confirm_bottom_page"> 
        <Link to={'/confirmation'}>
           <button className="confirm_btn">RECEIVE</button>
        </Link>
        <Link to={"/receive"}>
           <button className="goback_btn">GO BACK</button>
        </Link>
           <div className="logo_postreceive">
              <img src={logo} className="logo" alt="Logo" />
              <p className="title_postreceive">
                <span style={{ color: "white" }}>Feed</span>
                <span style={{ color: "white" }}>Forward</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}