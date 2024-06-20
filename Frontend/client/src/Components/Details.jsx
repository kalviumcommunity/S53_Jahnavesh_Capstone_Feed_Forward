import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const DonorDetails = () => {
  // const { donationId } = useParams();
  const [donorDetails, setDonorDetails] = useState([]);
  const donationId= Cookies.get('donorId');
  const conformDonation=async()=>{
    try {
      const response = await axios.delete(`http://localhost:4000/deleteDonation/${donationId}`)
    } catch (error) {
      alert("error")
    }
  }
  console.log(donationId)
  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/donorDetails/${donationId}`);
        console.log(response.data);
        setDonorDetails(response.data);
      } catch (error) {
        console.log('Error fetching donor details:', error);
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
      <p>Location: {donorDetails.Location}</p>
      <p>Phone: {donorDetails.Contact}</p>
      <button onClick={()=>{conformDonation()}}>Conform Donation</button>
    </div>
  );
};

export default DonorDetails;
