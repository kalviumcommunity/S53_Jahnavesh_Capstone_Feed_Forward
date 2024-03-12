import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Receive() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://s53-jahnavesh-capstone-feed-forward.onrender.com/receive";
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching Donations:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Receive</h1>
      <div className="all-components">
        {data.map((e, index) => (
          <div key={index}  className="each-card-components">
            <p><span style={{fontSize:"25px"}}>Feedable People :</span><span style={{fontWeight : "700",fontSize : "20px"}}>{e.Feedable_people}</span></p>
            <p style={{marginTop : "8%"}}><span style={{fontSize : "25px"}}>Location : </span><span style={{fontWeight : "700",fontSize : "20px"}}>{e.Location}</span></p>
            <p style={{marginTop : "8%"}}><span style={{fontSize : "25px"}}>Food Details :</span><span style={{fontWeight : "700" , fontSize : "20px"}}>{e.Food_details}</span></p>
            <button className="receive-btn">RECEIVE</button>
          </div>
        ))}
      </div>
    </div>
  );
}
