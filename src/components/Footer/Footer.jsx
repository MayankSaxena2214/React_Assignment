import React from 'react'
import "./Footer.css"
import {} from "react-icons"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlinePhone, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLocationPin } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-icons">
        <div><a href="https://www.instagram.com/mayanksaxena2214"><AiOutlineInstagram className='footer-icon insta '/></a></div>
        <div><a href="https://wa.me/9259525543" target="_blank"><AiOutlineWhatsApp className='footer-icon whatsapp' /></a></div>
        <div><a href="https://twitter.com/MayankSaxe59906"><AiOutlineTwitter className='footer-icon twitter'/></a></div>
        <div><a href="https://github.com/mayanksaxena2214"><AiOutlineGithub className='footer-icon github'/></a></div>
        <div><a href=""><AiOutlinePhone className='footer-icon phone'/></a></div>
      </div>
      <div className="address">
        <div className="icon"><FaLocationPin className='address-icon'/></div>
        <div className="street">1B-120 Sector-3 Madhav Puram</div>
        <div className="country">Uttar Pradesh, India</div>
      </div>
    </footer>
  )
}

export default Footer