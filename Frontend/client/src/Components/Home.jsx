import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import bg_img from "../images/BG-1.png";
import { AppContext } from "./ParentContext";

function Home() {
  const { signin } = useContext(AppContext);

  return (
    <div>
      <img src={bg_img} alt="" id="home_bg" />
      <Navbar />
      <div className="home-captions">
        <p>You can</p>
        <p>be the bridge</p>
        <p>between the two.</p>
      </div>
      <div className="home-caption-2">
        <p>Together, we can fight hunger. Donate food today!</p>
      </div>
      <div>
        {signin ? (
          <>
            <Link to={"/donateForm"}>
              <button className="donateBtn">DONATE</button>
            </Link>
            <Link to={"/receiveDetails"}>
              <button className="receiveBtn">RECEIVE</button>
            </Link>
          </>
        ) : (
          <p className="access">
            <span style={{ color: "orange" }}>
              Please login or sign up to access
            </span>{" "}
            donation and receive forms.
          </p>
        )}
      </div>
      <div id="services">
        <Footer />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default Home;
