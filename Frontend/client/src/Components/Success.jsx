import React, { useState } from 'react';
import axios from 'axios';
import donationBG from '../images/Dona_img.png'; 
import logo from '../images/logo_main_edited.png'; 

export default function Success() {
  const [imageBase64, setImageBase64] = useState('');
  const [contactNumber, setContactNumber] = useState(''); 

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error('Please select a file to upload.');
      return;
    }

    try {
      const base64 = await convertToBase64(file);
      setImageBase64(base64);
    } catch (error) {
      console.error('Error converting file to base64:', error);
    }
  };

  const submitForm = async () => {
    if (!imageBase64) {
      console.error('Please upload a receiver photo before submitting.');
      return;
    }

    const formData = new FormData(); 
    formData.append('receiverPhoto', imageBase64);
    formData.append('contactNumber', contactNumber); 

    try {
      const response = await axios.post(
        'https://s53-jahnavesh-capstone-feed-forward.onrender.com/receiveDetails',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        }
      );
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="success-container"> 
      <div className="header">
        <img src={donationBG} alt="Donation Background" className="success_bg" />
        <div className="logo-title">
          <img src={logo} className="logo" alt="Logo" />
          <p className="title">
            <span style={{ color: 'orange' }}>Feed</span>
            <span style={{ color: 'white' }}>Forward</span>
          </p>
        </div>
      </div>
      <div className="image_submission">
        <h3 className="pic_statement">PLEASE UPLOAD THE PIC OF RECEIVER</h3>
        <input type="file" onChange={handleFileUpload} className="image_upload_success" />
        <h3 style={{ marginTop: '5%' }}>CONTACT:</h3>
        <input
          type="number"
          className="contact_info"
          placeholder="PLEASE FILL THE CONTACT NUMBER OF RECEIVER"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <button onClick={submitForm} disabled={!imageBase64}>SUBMIT</button>
      </div>
    </div>
  );
}
