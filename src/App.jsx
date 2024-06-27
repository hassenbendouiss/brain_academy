import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Academy from './components/Academy/Academy'
import Campups from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero /> 
      <div className="container">
        <Title subTitle='Our Program' title= 'What We Offer'/>
      <Programs/>
      <About />
      <Title subTitle='Gallery' title= 'Academy Photos'/>
      <Campups />
      <Title subTitle='TESTIMONIALS' title= 'What Student Says'/>
      <Testimonials />
      <Title subTitle='CONTACT US' title= 'Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
