import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";

function AllRoutes(){
  return(
     <Routes>
       <Route path="/" element = {<Home />}/>
       <Route path="/contact" element = {<Contact/>}/>
       <Route path="/about" element={<About />}/>
    </Routes>
   )
}

export default AllRoutes