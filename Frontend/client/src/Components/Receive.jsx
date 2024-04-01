import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                <span style={{ fontSize: "25px" }}>Feedable People :</span>
                <span style={{ fontWeight: "700", fontSize: "20px" }}>
                  {e.Feedable_people}
                </span>
              </p>
              <p>
                <span style={{ fontSize: "25px" }}>Location : </span>
                <span style={{ fontWeight: "700", fontSize: "20px" }}>
                  {e.Location}
                </span>
              </p>
              <p>
                <span style={{ fontSize: "25px" }}>Food Details :</span>
                <span
                  style={{
                    fontWeight: "700",
                    color: "orange",
                    fontSize: "20px",
                  }}
                >
                  {e.Food_details}
                </span>
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
