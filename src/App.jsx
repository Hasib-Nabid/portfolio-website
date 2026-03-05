import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initCursorGlow, initParticles, initScrollReveal } from './utils/effects'

export default function App() {
    useEffect(() => {
        initCursorGlow()
        initParticles()
        const timer = setTimeout(initScrollReveal, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="cursor-glow" id="cursorGlow"></div>
            <Navbar />
            <Hero />
            <About />
            <Research />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    )
}
