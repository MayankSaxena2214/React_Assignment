import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import "./App.css"
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
const App = () => {
  return (
    <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App