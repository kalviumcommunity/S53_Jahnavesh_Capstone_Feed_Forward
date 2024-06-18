import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DonorDetails = () => {
  const { donationId } = useParams();
  const [donorDetails, setDonorDetails] = useState(null);

  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const response = await axios.get(`https://s53-jahnavesh-capstone-feed-forward.onrender.com/donorDetails/${donationId}`);
        setDonorDetails(response.data);
      } catch (error) {
        console.error('Error fetching donor details:', error);
      }
    };

    fetchDonorDetails();
  }, [donationId]);

  if (!donorDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Donor Details</h1>
      <p>Name: {donorDetails.Donor_Name}</p>
      <p>Email: {donorDetails.Donor_Email}</p>
      <p>Location: {donorDetails.Donor_Location}</p>
      <p>Phone: {donorDetails.Donor_Phone}</p>
    </div>
  );
};

export default DonorDetails;
