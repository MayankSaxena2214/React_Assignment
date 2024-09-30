import React, { useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { IoDiamondOutline } from "react-icons/io5";
import { PiAlienFill, PiHandbagFill } from "react-icons/pi";
import "./Navbar.css"
import { SlHandbag } from "react-icons/sl";
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <NavLink to="/">
            <div className='web-icon-div'><IoDiamondOutline/></div>
            </NavLink>
            <NavLink to="/"><div>Pop Rock Crystal</div></NavLink>
        </div>
        {/* hamberger menu using html css */}
        <div className='menu' onClick={toggleMenu}>
            <div className='menu-icon' ></div>
            <div className='menu-icon' ></div>
            <div className='menu-icon' ></div>
        </div>
        <ul className={isMenuOpen ?'navbar-links active':'navbar-links'}>
            <NavLink onClick={toggleMenu}  to={"/"}><li>Home</li></NavLink>
            <NavLink onClick={toggleMenu} to={"/about"}><li>About</li></NavLink>
            <NavLink onClick={toggleMenu} to={"/services"}><li>Services</li></NavLink>
            <NavLink onClick={toggleMenu} to={"/contact"}><li>Contact</li></NavLink>
        </ul>
        <NavLink to={"/cart"} className={isMenuOpen?"cart-link active":"cart-link"}><div className="cart"><PiAlienFill style={{fontSize:"20px",backgroundColor:'hotpink',marginRight:"10px"}}/><PiHandbagFill style={{fontSize:"40px",color:"white"}}/></div></NavLink>
    </nav>
  )
}

export default Navbar