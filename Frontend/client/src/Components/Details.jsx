import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { donorEmail, donorName, donationId } = location.state;

  return (
    <div>
      <h1>Donation Details</h1>
      <p>Donor Email: {donorEmail}</p>
      <p>Donor Name: {donorName}</p>
      <p>Donation ID: {donationId}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Details;
