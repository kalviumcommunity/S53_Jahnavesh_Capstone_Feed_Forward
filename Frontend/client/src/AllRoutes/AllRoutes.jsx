import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Receive from "../Components/Receive";
import Footer from "../Components/Footer";
import DonateForm from "../Components/DonateForm";
import Postreceive from "../Components/Postreceive";
import Success from "../Components/Success";
import { SignInMethod } from "firebase/auth";
import Signup from "../Components/SignupForm";
import Signin from "../Components/SigninForm";
import Details from "../Components/Details";
import DonorDetails from "../Components/Details";

function AllRoutes(){
  return(
     <Routes>
       <Route path="/" element = {<Home />}/>
       <Route path="/contact" element = {<Contact/>}/>
       <Route path="/about" element={<About />}/>
       <Route path="/donateForm" element= {<DonateForm/>}/>
       <Route path="/receive" element= {<Receive />} />
       <Route path="/services" element={<Footer />}/>
       <Route path="/receiveDetails" element={<Success/>}/>
       <Route path="/signin" element={<Signin />}/>
       <Route path="/signup" element={<Signup />}/>
       <Route path="/details" element={<DonorDetails/>} />
       {/* <Route path="/details" element={<} */}


       {/* <Route path="/confirmation" element={<Success />}/> */}
    </Routes>
   )
}

export default AllRoutes