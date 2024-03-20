import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import bg_img from "../images/BG-1.png";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { isAuthenticated } = useAuth0();

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
        {isAuthenticated ? (
          <>
            <Link to={"/donateForm"}>
              <button className="donateBtn">DONATE</button>
            </Link>
            <Link to={"/receive"}>
              <button className="receiveBtn">RECEIVE</button>
            </Link>
          </>
        ) : (
          <p className="access"><span style={{color : "orange"}}>Please login or sign up to access</span>  donation and receive forms.</p>
        )}
      </div>
      <Footer />
      <About />
    </div>
  );
}

export default Home;
