import React from 'react'
import HeroSection from './HeroSection'
import AllProducts from '../AllProducts/AllProducts'
import FinalOverview from '../FinalOverview/FinalOverview'
import "./Home.css"
const Home = () => {
  return (
    <>
        <HeroSection/>
        <AllProducts/>
        <div className="wavy-clip-path">
            <FinalOverview/>
        </div>
    </>
  )
}

export default Home