import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/PhotoGallery/Gallery'
import Footer from '../../components/Footer/Footer'
import How from '../../components/How/How'
import About from '../../components/Aboutus/About'
import Faq from '../../components/FAQ/Faq'
import Sechdule from '../../components/Sechdule/Sechdule'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <How/>
      <About/>
      {/* <Carousel /> */}
      <Gallery />
      <Faq/>
      <Sechdule></Sechdule>
      <Footer />
    </div>
  )
}

export default Home
