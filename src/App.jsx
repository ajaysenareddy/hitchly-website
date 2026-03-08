import React, { Suspense, lazy } from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopBanner from './components/TopBanner'

// Lazy load below-the-fold components for faster initial page load
const Features = lazy(() => import('./components/Features'))
const Stats = lazy(() => import('./components/Stats'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const RouteExplorer = lazy(() => import('./components/RouteExplorer'))
const SavingsCalculator = lazy(() => import('./components/SavingsCalculator'))
const SeoContent = lazy(() => import('./components/SeoContent'))
const Sponsorship = lazy(() => import('./components/Sponsorship'))
const BetaSignup = lazy(() => import('./components/BetaSignup'))

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
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#F8FAFC' }}></div>}>
        <HowItWorks />
        <RouteExplorer />
        <SavingsCalculator />
        <Features />
        <Stats />
        <SeoContent />
        <Sponsorship />
        <BetaSignup />
      </Suspense>
    </main>
  )
}

export default App
