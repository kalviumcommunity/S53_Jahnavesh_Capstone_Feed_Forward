import React from "react";
import "./About.css";
import about_final from "../images/final about image.png";

function About() {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">ABOUT US</h1>
        <img src={about_final} alt="" className="about_final_img" />
        <div>
          <p className="aboutIdea">
            The central focus of this capstone project is to aid those in need ,
            particularly by addressing the issue of the leftover food . Imagine
            you’ve hosted an event and find yourself with excess food that you’d
            rather not waste . By visiting our website, you can easily donate
            this surplus food . Simply input the estimated number of people the
            food could feed , along with your location and some basic details .
            Following a process of verification and confirmation , individuals
            representing orphanages , senior homes or anyone eager to contribute
            to the cause can receive the donated food . Our platform not only
            aims to minimise food wastage but also facilitates various forms of
            food donation , ensuring that assistance reaches those who require
            it the most .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
