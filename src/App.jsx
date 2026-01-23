
import './index.css'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import AboutSection from '@/sections/About'
import Contact from '@/sections/Contact'
import HeroSection from '@/sections/Hero'
import Projects from '@/sections/Projects'

import Testimonials from '@/sections/Testimonials'
import Certifications from '@/sections/Certifications'


function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
        <Projects/>
      <Certifications/>  
       <Testimonials/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App