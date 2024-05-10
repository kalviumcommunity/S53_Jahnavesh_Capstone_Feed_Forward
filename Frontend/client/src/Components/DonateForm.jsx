import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import formBG from "../images/df img.png";
import logo from "../images/logo.png";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { AppContext } from "./ParentContext";

export default function DonateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [imageBase64, setImageBase64] = useState("");
  const {user} = useContext(AppContext)

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

  const formSubmitHandler = async (data) => {
    try {
      const formData = { ...data, myFile: imageBase64 };
  
      const docRef = doc(db, "donates", user.uid);
      const docSnapshot = await getDoc(docRef);
      let existingData = [];
      if (docSnapshot.exists()) {
        existingData = docSnapshot.data().donations || [];
      }
  
      const updatedData = [...existingData, formData];
  
      await setDoc(docRef, { donations: updatedData });
  
      console.log("Data successfully added to Firestore:", updatedData);
      reset();
    } catch (err) {
      console.log("Error submitting form:", err);
    }
  };
  

  return (
    <div>
      <img src={formBG} alt="" id="formBG" />
      <div className="form-container">
        <div className="logo_title">
          <img src={logo} alt="" className="form_logo" />
          <h1>
            <span style={{ color: "orange" }}>Feed</span>{" "}
            <span style={{ color: "black" }}>Forward</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="success">
              <h2 className="gratitude-quote">Thank you for your donation .</h2>
            </div>
          )}

          <label>Your Name : </label>
          <input
            type="text"
            className="fillables"
            placeholder="Name of the Donor"
            {...register("Donor_Name", {
              required:
                "Please enter the name of the donor",
            })}
          />
          {errors.Donor_Name && (
            <p className="err">{errors.Donor_Name.message}</p>
          )}

          <label>Your Email :</label>
          <input
            type="text"
            className="fillables"
            placeholder="Email of Donor"
            {...register("Donor_Email", {
              required:
                "Please enter the Email of the donor",
            })}
          />
          {errors.Donor_Email && (
            <p className="err">{errors.Donor_Email.message}</p>
          )}

          <label>Feedable People :</label>
          <input
            type="text"
            className="fillables"
            placeholder="Number of Feedable People"
            {...register("Feedable_people", {
              required:
                "Please enter the approximate number of people that can be fed with your food",
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
              required:
                "Please enter the location where the food should be collected",
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
          {/* <label>Time the food will expire at:</label>
          <input type="time" className="fillables" /> */}
          <label>Please upload the photo of the food:</label>
          <input
            type="file"
            label="Image"
            name="myFile"
            id="file-upload"
            accept=".jpeg , .png , .jpg"
            onChange={(e) => handleFileUpload(e)}
            className="image_input"
          />

          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
