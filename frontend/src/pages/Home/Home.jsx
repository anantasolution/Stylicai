import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/PhotoGallery/Gallery'
import Footer from '../../components/Footer/Footer'
import How from '../../components/How/How'
import About from '../../components/Aboutus/About'
import Faq from '../../components/FAQ/Faq'
import { TestTubesIcon } from 'lucide-react'
import Testimonial from '../../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <How/>
      <About/>
      <Carousel />
      <Gallery />
      <Faq/>
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
