
import './index.css'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'
import About from '@/sections/About'
import Contact from '@/sections/Contact'

import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Testimonials from '@/sections/Testimonials'





 


function App() {
  

  return (
   <div className="container">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>

   </div>
  )
}

export default App
