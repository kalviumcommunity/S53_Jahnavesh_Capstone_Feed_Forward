import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import formBG from "../images/df img.png";
import logo from "../images/logo.png"

export default function DonateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  
  const formSubmitHandler = async (data) => {
    try {
      const donationData = await axios.post("https://s53-jahnavesh-capstone-feed-forward.onrender.com/donateForm", data);
      console.log(donationData);
      console.log(data);
      reset();
    } catch (err) {
      console.log(err, "error");
    }
  };

  const [file,setFile] = useState()

  function handlefileEvent (event){
    setFile(event.target.files[0])
    console.log(file);
  }

  return (
    <div>
      <img src={formBG} alt="" id="formBG" />
      <div className="form-container">
        <div className="logo_title">
            <img src={logo} alt="" className="form_logo"/>
            <h1><span style={{color : "orange"}}>Feed</span> <span style={{color : "black"}}>Forward</span></h1>
        </div>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="success">
              <h2 className="gratitude-quote">Thank you for your donation .</h2>
            </div>
          )}

          <label>Feedable People :</label>
          <input
            type="text"
            className="fillables"
            placeholder="Number of Feedable People"
            {...register("Feedable_people", {
              required: "Please enter the approximate number of people that can be fed with your food",
            })}
          />
          {errors.Feedable_people && (
            <p className="err">{errors.Feedable_people.message}</p>
          )}

          <label>Location : </label>
          <input
            type="text"
            className="fillables"
            placeholder="Location where the food is to be collected"
            {...register("Location", {
              required: "Please enter the location where the food should be collected",
            })}
          />
          {errors.Location && <p className="err">{errors.Location.message}</p>}

          <label>Contact Number : </label>
          <input
            type="number"
            className="fillables"
            placeholder="Contact Number of Donor"
            {...register("Contact", {
              required: "Please enter the Contact Details",
            })}
          />
          {errors.Contact && <p className="err">{errors.Contact.message}</p>}

          <label>Food Details :</label>
          <input
            type="text"
            className="fillables"
            placeholder="Types of food"
            {...register("Food_details", {
              required: "Please enter the types of food",
            })}
          />
          {errors.Food_details && (
            <p className="err">{errors.Food_details.message}</p>
          )}
          <input type="file" name="file" onChange={handlefileEvent}/>
          <button>Upload</button>

          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}