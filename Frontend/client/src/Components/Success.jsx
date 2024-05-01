import React, { useState } from 'react';
import axios from 'axios';
import donationBG from '../images/Dona img.png';
import logo from '../images/logo main edited.png';

export default function Success() {
  const [imageBase64, setImageBase64] = useState('');

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error('Please select a file to upload.');
      return;
    }

    const base64 = await convertToBase64(file);
    setImageBase64(base64);
  };

  const submitForm = async () => {
    const formData = { receiverPhoto: imageBase64 };

    try {
      const response = await axios.post(
        'https://s53-jahnavesh-capstone-feed-forward.onrender.com/receiveDetails',
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <img src={donationBG} alt="" className="success_bg" />
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
        <input type="file" onChange={handleFileUpload} />
        <button onClick={submitForm}>SUBMIT</button>
      </div>
    </div>
  );
}
