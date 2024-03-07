import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../styles/MerchantLogin.css"
import axios from "axios";
import { Link } from "react-router-dom";
const MerchantLogin = () => {


let [email,setemail]=useState("")
let [password,setpassword]=useState("")

console.log(email);
  
function verifyMerchant(e){
  e.preventDefault(); 
  axios.post(`http://localhost:8080/merchants/verify/${email}&${password}`)

  .then((res)=>{
    console.log(res);
    alert("Login Successfully")
  })
  .catch((err)=>{
    console.log("Invalid credentials");
  })
 }

  return (
    <div className="merchantlogin">
      <Form>
        <Form.Group className="mb-3" controlId="fromGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email}  onChange={(e)=>setemail(e.target.value)}  type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password}  onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Enter your password" />
        </Form.Group>
        <Form.Group>
            <button onClick={verifyMerchant} className="btn btn-success mx-5">Sign in</button>
            <button className="btn btn-danger mx-5"><Link to="/merchantsignup">Sign up</Link></button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MerchantLogin;
