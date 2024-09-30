import React from 'react'
import "./Services.css"
import Navbar from '../Navbar/Navbar'
import services from "../../assets/services.jpeg"
const Services = () => {
  return (
    <>
      <div style={{backgroundColor:"black"}}>
      <Navbar/>
      </div>
      <h1 style={{textAlign:"center",color:"blue"}}>Services</h1>
    <div className="about-container">
      <div className="about-image-container">
        <img src={services} alt="" />
      </div>
      <div className="about-content-container">
      Welcome to [Your Brand Name]! At [Your Brand Name], we believe in creating products that combine style, functionality, and innovation. Founded in [Year], our journey began with a simple idea: to provide quality accessories that enhance everyday experiences. Our flagship product, the Agate Phone Grip, is designed not just to be a functional accessory but also to reflect your unique personality. With its vibrant colors and versatile designs, it allows you to express yourself while keeping your phone secure.

We strive to brin need.

We invite you to explore our collection and find the perfect accessory that speaks to you. Stay connected with us through our social media channels to keep up with the latest trends, promotions, and community stories. Thank you for being a part of the [Your Brand Name] family. Together, let's celebrate style and individuality!
      </div>
    </div>
    </>
  )
}

export default Services