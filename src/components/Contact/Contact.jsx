import React, { useState } from 'react'
import "./Contact.css"
import touch from "../../assets/touch.jpeg"
import Navbar from '../Navbar/Navbar'
const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  return (
    <>
    <div style={{backgroundColor:"black"}}>
      <Navbar/>
      </div>
    <div className="contact-container">
      <div className="contact-image">
        <img src={touch} alt="" />
      </div>
      <div className="form-container">
        <form action="">
          <h2>Enter your details</h2>
          <label htmlFor="">Your Name</label>
          <br />
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
          <br />

          <label htmlFor="">Your email</label>
          <br />
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your email'/>
          <br />
          <label htmlFor="">Your Phone Number</label>
          <br />
          <input type="text" placeholder='Your Number'value={phone} onChange={(e)=>setPhone(e.target.value)}  />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact