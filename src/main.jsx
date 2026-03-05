import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CarpoolHyderabad from './pages/CarpoolHyderabad.jsx'
import RideShareOfficeCommute from './pages/RideShareOfficeCommute.jsx'
import HowHitchlyWorks from './pages/HowHitchlyWorks.jsx'
import BenefitsOfCarpooling from './pages/BenefitsOfCarpooling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/car-pool-hyderabad" element={<CarpoolHyderabad />} />
        <Route path="/ride-share-office-commute" element={<RideShareOfficeCommute />} />
        <Route path="/how-hitchly-works" element={<HowHitchlyWorks />} />
        <Route path="/benefits-of-carpooling" element={<BenefitsOfCarpooling />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
