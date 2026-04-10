import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

// Lazy load route components for code splitting & better LCP
const App = lazy(() => import('./App.jsx'))
const CarpoolHyderabad = lazy(() => import('./pages/CarpoolHyderabad.jsx'))
const RideShareOfficeCommute = lazy(() => import('./pages/RideShareOfficeCommute.jsx'))
const HowHitchlyWorks = lazy(() => import('./pages/HowHitchlyWorks.jsx'))
const BenefitsOfCarpooling = lazy(() => import('./pages/BenefitsOfCarpooling.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))

// Loading fallback for Suspense
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: '#F9FAFB' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid rgba(0, 200, 83, 0.2)', borderTop: '4px solid #00C853', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{"@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }"}</style>
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/car-pool-hyderabad" element={<CarpoolHyderabad />} />
            <Route path="/ride-share-office-commute" element={<RideShareOfficeCommute />} />
            <Route path="/how-hitchly-works" element={<HowHitchlyWorks />} />
            <Route path="/benefits-of-carpooling" element={<BenefitsOfCarpooling />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
