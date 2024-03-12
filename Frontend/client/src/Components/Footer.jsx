import React from "react";
import "../App.css";
import left_side_image from "../images/side design left.png" ;
import right_side_image from "../images/side design right.png" ;

export default function Footer(){
  return(
    <div className="footer">
      <h1>SERVICES</h1>
      <p className="footer-caption">The services that we cater to meet the needs of the needy</p>
      <div>
        <img src={left_side_image} alt="left-image" className="footer-left-image" />
        <img src={right_side_image} alt="right-image" className="footer-right-image" />
      </div>
    </div>
  )
}