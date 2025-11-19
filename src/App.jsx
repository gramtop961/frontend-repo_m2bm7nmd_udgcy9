import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(900px 400px at 10% 10%, rgba(45,212,191,0.08), transparent 60%), radial-gradient(700px 400px at 90% 10%, rgba(163,230,53,0.08), transparent 60%)',
      }} />
      <div className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Testimonials />
        <Download />
        <Footer />
      </div>
    </div>
  )
}

export default App
