import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Sponsorship from './components/Sponsorship'
import Footer from './components/Footer'
import { ArrowRight } from 'lucide-react'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Sponsorship />

      {/* CTA Section */}
      <section className="container section" id="join" style={{ paddingTop: '2rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1F2937 100%)',
          borderRadius: '32px',
          padding: '5rem 2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)'
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(0, 200, 83, 0.1)' }}></div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Ready to Transform Your Commute?</h2>
            <p style={{ marginBottom: '2.5rem', color: '#B0BEC5', fontSize: '1.2rem' }}>
              Join our beta program today and be the first to experience the future of carpooling with Hitchly.
            </p>
            <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Get Early Access <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#607D8B' }}>
              Limited spots available for the beta release.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
