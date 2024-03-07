import React from "react";
import "../styles/Merchantsignup.css";
const Merchantsignup = () => {
  return (
    <div className="merchantsignup">
       <h4>Merchant Sign up page</h4>
      <form action="">
        {/* <h4>Merchant Sign up page</h4> */}
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter your name" />
        <label htmlFor="">Gst_number</label>
        <input type="text" placeholder="Enter your gst no" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Phone no</label>
        <input type="tel" pattern="[0-9]{10}" placeholder="Enter your phone" />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Enter your password" />
        <button className="btn btn-outline-info">Submit</button>
      </form>
    </div>
  );
};

export default Merchantsignup;
