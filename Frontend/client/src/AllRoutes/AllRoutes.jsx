import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Donate from "../Components/Donate";
import Receive from "../Components/Receive";

function AllRoutes(){
  return(
     <Routes>
       <Route path="/" element = {<Home />}/>
       <Route path="/contact" element = {<Contact/>}/>
       <Route path="/about" element={<About />}/>
       <Route path="/donate" element= {<Donate/>}/>
       <Route path="/receive" element= {<Receive />} />
    </Routes>
   )
}

export default AllRoutes