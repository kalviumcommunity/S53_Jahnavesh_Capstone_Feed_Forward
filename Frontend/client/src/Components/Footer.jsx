import React from "react";
import "./Footer.css";
import left_side_image from "../images/side design left.png" ;
import right_side_image from "../images/side design right.png" ;
import call_img from "../images/call symbol.png";
import share_logo from "../images/share logo.png";
import vehicle_logo from "../images/vehicle logo.png";

export default function Footer(){
  return(
    <div className="footer">
      <h1>SERVICES</h1>
      <p className="footer-caption">The services that we cater to meet the needs of the needy</p>
      <div className="images">
        <img src={left_side_image} alt="left-image" className="footer-left-image" />
        <img src={right_side_image} alt="right-image" className="footer-right-image" />
        <div className="service-images">
        <img src={call_img} alt="" className="call_img" />
        <img src={share_logo} alt=""  className="share_logo"/>
        <img src={vehicle_logo} alt="" className="vehicle_logo"/>
      </div>
      </div>
      <div className="service-names">
        <p>CUSTOMER SERVICE</p>
        <p className="provide-food">PROVIDE FOOD </p>
        <p>WE SHIP</p>
      </div>
      
      
    </div>
  )
}