import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import donationBG from '../images/Dona img.png';
import logo from '../images/logo main edited.png';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState("");

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
    const base64 = await convertToBase64(file);
    setImageBase64(base64);
  };

  const onSubmit = async (formData) => {
    try {
      if (!imageBase64) {
        console.error("Image is required.");
        return;
      }

      const Data = { ...formData, receiverPhoto: imageBase64 }; // Include receiverPhoto in formData
      const response = await axios.post(
        'https://s53-jahnavesh-capstone-feed-forward.onrender.com/receiveDetails',
        Data
      );
      console.log('Success:', response.data);
      navigate("/receive");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="pic_statement">PLEASE UPLOAD THE PIC OF RECEIVER</h3>
          <input
            type="file"
            {...register('receiverPhoto', { required: 'Receiver photo is required' })}
            className="image_upload_success"
            onChange={handleFileUpload}
          />
          {errors.receiverPhoto && <p>{errors.receiverPhoto.message}</p>}
          
          <h3 style={{ marginTop: '5%' }}>CONTACT:</h3>
          <input
            type="number"
            {...register('Contact', { required: 'Contact number is required' })}
            className="contact_info"
            placeholder="PLEASE FILL THE CONTACT NUMBER OF RECEIVER"
          />
          {errors.Contact && <p>{errors.Contact.message}</p>}
          
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
