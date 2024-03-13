import React from "react";

function Home(){
  return(
   <div>
      <div className="home-captions">
        <p>You can</p>
        <p>be the bridge</p>
        <p>between the two.</p>
      </div>
        <div className="home-caption-2">
          <p>Together , we can fight hunger . Donate food today!</p>
        </div>
        <div>
          <button className="donateBtn">DONATE</button>
          <button className="receiveBtn">RECEIVE</button>
        </div>
   </div> 
  )
}

export default Home