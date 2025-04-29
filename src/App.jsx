import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/hero'
import HotelCards from "./Components/Hotelcard";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HotelCards />
    </div>
  )
}

export default App
