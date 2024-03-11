import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="success">
              <p>Donation Form filled Successful</p>
            </div>
          )}

          <label>Feedable People :</label>
          <input
            type="text"
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
            placeholder="Location where the food is to be collected"
            {...register("Location", {
              required: "Please enter the location where the food should be collected",
            })}
          />
          {errors.Location && <p className="err">{errors.Location.message}</p>}

          <label>Contact Number : </label>
          <input
            type="number"
            placeholder="Contact Number of Donor"
            {...register("Contact", {
              required: "Please enter the Contact Details",
            })}
          />
          {errors.Contact && <p className="err">{errors.Contact.message}</p>}

          <label>Food Details :</label>
          <input
            type="text"
            placeholder="Types of food"
            {...register("Food_details", {
              required: "Please enter the types of food",
            })}
          />
          {errors.Food_details && (
            <p className="err">{errors.Food_details.message}</p>
          )}

          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
