import React from "react";
import { Link } from "react-router-dom";


export default function Selection(){
  return(
    <div>
      <div className="options">
        <Link to={"/donate"}>
          <button className="donate-btn">
            DONATE
          </button>
        </Link>
        <Link to={"/receive"}>
          <button className="recieve-btn">
            RECIEVE
          </button>
        </Link>
      </div>

    </div>
  )
}