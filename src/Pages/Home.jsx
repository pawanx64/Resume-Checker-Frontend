import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import MiddleSection from '../Components/MiddleSection'
import Review from '../Components/Review'
import Details from '../Components/Details'
import Footer from '../Components/Footer'
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MiddleSection/>
      <Review/>
      <Details/>
      <Footer/>
    </div>
  )
}

