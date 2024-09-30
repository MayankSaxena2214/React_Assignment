
import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./HeroSection.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const HeroSection = () => {
  return (
    <>
    <div className='container'>
        <div className="background-container"></div> {/* Clipped background */}
        <Navbar/>
        <div className="hero-container">
          <div className="hero-content">
            {/* Add your content here */}
            <div className="heading-content">
              <h2>Welcome to</h2>
              <h1>Pop Rock Crystal Shop!</h1>
            </div>
            <div className="para-content">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
            </div>
            <div className="button-content">
              <button className="shop-now-btn">
                Shop now
              </button>
              <button className="about-us-btn">about us</button>
            </div>

          </div>
          <div className="image-container">
            {/* Add your image here */}
            <div className="notify-type">New Lot</div>
            <div className="card-type">
              <div className="hero-card-image">
                <img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__" alt="" />
              </div>
              <div className="card-image-desc-container">
                <div className="card-image-desc">CRYSTAL AGATE PHONE GRIP <span>18.99$</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="carosoul">
          <div className="carosoul-elements-container">
            <div className='left-arrow'><FaArrowLeft style={{color:"white"}}/></div>
            <div className='mini-circle'>
              <div className='left-most-mini-cirlce'></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='right-arrow'><FaArrowRight style={{color:"white"}}/></div>
          </div>
        </div>
        <div className="scroll-down-contaner">
          <div className="scroll-down-menu">
            <div className="scorll-down-icons">
              <BsMouse/>
              <LuDot/>
            </div>
            <div className="scroll-down-content">scroll down</div>

          </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection
