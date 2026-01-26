import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Sponsorship from './components/Sponsorship'
import BetaSignup from './components/BetaSignup'
import TopBanner from './components/TopBanner'


function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Sponsorship />
      <BetaSignup />
    </>
  )
}

export default App
