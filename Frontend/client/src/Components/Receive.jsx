import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import formBG from "../images/df img.png";


export default function Receive() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url = "https://s53-jahnavesh-capstone-feed-forward.onrender.com/receive";
      try {
        const res = await axios.get(url);
        setData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.error("Error fetching Donations:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.Location.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <img src={formBG} alt="" id="receivebg" />
      <input
        type="text"
        className="receive-filter"
        placeholder="Filter by Location"
        value={filter}
        onChange={handleFilterChange}
      />
      <div className="receive-page">
        <div className="all-components">

          {filteredData.map((e, index) => (
            <div key={index} className="each-card-components">

              <p>
                {/* <span style={{ fontSize: "25px" }}>Feedable People :</span> */}
                <h2 className="location">
                  {e.Location.toUpperCase()}
                </h2>
              </p>
              <p>
                {/* <span style={{ fontSize: "25px" }}>Food Details :</span> */}
                <p className="food_details">
                  {e.Food_details.toUpperCase()}
                </p>
              <p>
                <p style={{ fontWeight: "700", fontSize: "20px" }} className="quantity">
                  QUANTITY : <span style={{color : "#888"}}>{e.Feedable_people}</span>
                </p>
                {/* <span style={{ fontSize: "25px" }}>Location : </span> */}
              </p>
              </p>
              <Link to={"/receiveDetails"}>
                <button className="receive-btn">RECEIVE</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
