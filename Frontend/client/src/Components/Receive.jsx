import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import formBG from "../images/df img.png";

export default function Receive() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const url = "https://s53-jahnavesh-capstone-feed-forward.onrender.com/receive";
      try {
        const res = await axios.get(url);
        setData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.error("Error fetching Donations:", error);
      } finally {
        setLoading(false);
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
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div className="all-components">
            {filteredData.map((e, index) => (
              <div key={index} className="each-card-components">
                <p>
                  <h2 className="location">{e.Location.toUpperCase()}</h2>
                </p>
                <p className="food_details">{e.Food_details.toUpperCase()}</p>
                <p className="quantity">
                  QUANTITY : <span style={{ color: "#888" }}>{e.Feedable_people}</span>
                </p>
                <Link to={"/receiveDetails"}>
                  <button className="receive-btn">RECEIVE</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
