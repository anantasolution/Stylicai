import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/PhotoGallery/Gallery'
import Footer from '../../components/Footer/Footer'
import How from '../../components/How/How'
import Aboutus from '../../pages/Aboutus/About'
import Faq from '../../components/FAQ/Faq'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <How/>
      <Aboutus/>
      {/* <Carousel /> */}
      <Gallery />
      <Faq/>
      <Footer />
    </div>
  )
}

export default Home
