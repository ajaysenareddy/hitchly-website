import React from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import SeoContent from './components/SeoContent'
import Sponsorship from './components/Sponsorship'
import BetaSignup from './components/BetaSignup'
import TopBanner from './components/TopBanner'

function App() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hitchly.in/#organization",
        "name": "Hitchly",
        "url": "https://hitchly.in",
        "logo": "https://hitchly.in/favicon-180x180.png",
        "description": "Smart ride pooling platform for daily commuters in Hyderabad, India"
      },
      {
        "@type": "WebSite",
        "@id": "https://hitchly.in/#website",
        "url": "https://hitchly.in",
        "name": "Hitchly",
        "publisher": { "@id": "https://hitchly.in/#organization" }
      }
    ]
  };

  return (
    <main>
      <SEO
        title="Hitchly – Carpool Hyderabad | Smart Ride Sharing for Daily Office Commute"
        description="Hitchly is a smart ride pooling platform helping commuters in Hyderabad share rides, reduce travel costs, avoid traffic stress, and make daily office commutes easier."
        keywords="carpool Hyderabad, ride sharing Hyderabad, office commute sharing, daily commute ride share India"
        schema={homeSchema}
      />
      <TopBanner />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <SeoContent />
      <Sponsorship />
      <BetaSignup />
    </main>
  )
}

export default App
