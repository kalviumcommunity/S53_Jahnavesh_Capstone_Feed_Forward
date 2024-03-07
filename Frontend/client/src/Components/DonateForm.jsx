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
    //   try{
    //   const DonationData= await axios.post("",data)
    //   console.log(DonationData);
    //   console.log(data);
    // }catch(err){
    //   console.log(err,"error");
    // }
    // };
  };
  return (
    <div>
      <div className="form-container">
        {/* <fieldset> */}
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            {isSubmitSuccessful && (
              <div className="success">
                <p>Donation Form filled Successful</p>
              </div>
            )}

            <label>Feedable People :</label>
            <input
              type="text" placeholder="Number of Feedable People"
              {...register("Feedable_people", {
                required:
                  "Please the approximate people that can be fed with your food",
              })}
            />
            {errors.Feedable_people && (
              <p className="err">{errors.Feedable_people.message}</p>
            )}

            <label>Location : </label>
            <input
              type="text" placeholder="Location where the food is to be collected "
              {...register("Location", {
                required:
                  "Please Enter the location where food should be collected",
              })}
            />
            {errors.Location && (
              <p className="err">{errors.Location.message}</p>
            )}

            <label>Contact Number : </label>
            <input
              type="Number" placeholder="Contact Number of Donor "
              {...register("Contact", {
                required: "Enter the Contact Details",
              })}
            />
            {errors.Contact && (
              <p className="err">{errors.Contact.message}</p>
            )}

            <label>Food Details :</label>
            <input
              type="text" placeholder="Types of food"
              {...register("Food_Details", {
                required: "Please enter the types of food",
              })}
            />
            {errors.Food_Details && (
              <p className="err">{errors.Food_Details.message}</p>
            )}

            <input type="submit" className="submit" />
          </form>
        {/* </fieldset> */}
      </div>
    </div>
  );
}
