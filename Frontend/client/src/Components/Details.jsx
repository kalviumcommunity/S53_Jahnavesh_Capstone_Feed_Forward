import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import backgroundimg from "../images/BG-1.png"

const DonorDetails = () => {
  // const { donationId } = useParams();
  const [donorDetails, setDonorDetails] = useState([]);
  const donationId= Cookies.get('donorId');
  const conformDonation=async()=>{
    try {
      const response = await axios.delete(`https://s53-jahnavesh-capstone-feed-forward.onrender.com/deleteDonation/${donationId}`)
    } catch (error) {
      alert("error")
    }
  }
  console.log(donationId)
  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const response = await axios.get(`https://s53-jahnavesh-capstone-feed-forward.onrender.com/donorDetails/${donationId}`);
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
      <img src={backgroundimg} alt="" className='donordetailsimg'/>
      <div className='detailsbox'>
        <h1 style={{marginLeft:"18%"}}>Donor Details</h1>
        <p style={{padding:"12px"}}>Name: {donorDetails.Donor_Name}</p>
        <p style={{padding:"12px"}}>Email: {donorDetails.Donor_Email}</p>
        <p style={{padding:"12px"}}>Location: {donorDetails.Location}</p>
        <p style={{padding:"12px"}}>Phone: {donorDetails.Contact}</p>
      </div>
    </div>
  );
};

export default DonorDetails;
