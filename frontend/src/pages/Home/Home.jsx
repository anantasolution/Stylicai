import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/PhotoGallery/Gallery";
import Footer from "../../components/Footer/Footer";
import How from "../../components/How/How";
import About from "../../components/Aboutus/About"; // Kept "About" from the add/contactus branch
import Faq from "../../components/FAQ/Faq";
import Schedule from "../../components/Sechdule/Sechdule"; // Added "Schedule" from main branch
import Testimonial from "../../components/Testimonial/Testimonial"; // Kept "Testimonial" from the add/contactus branch

const Home = () => {
  return (
<div>
  <Navbar />
  <Hero />
  <How />
  <About /> 
  <Gallery />
  <Carousel /> 
  <Schedule /> 
  <Faq />
  <Testimonial />  
  <Footer />
</div>

  );
};

export default Home;
