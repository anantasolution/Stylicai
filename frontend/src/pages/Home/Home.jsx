import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MyCarousle from "../../components/carousel/MyCarousle";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/PhotoGallery/Gallery";
import Footer from "../../components/Footer/Footer";
import How from "../../components/How/How";
import Faq from "../../components/FAQ/Faq";
import Schedule from "../../components/Sechdule/Sechdule"; // Kept 'Schedule' from main
import Aboutus from "../../components/Aboutus/Aboutus";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <How />
      <Aboutus />
      <MyCarousle></MyCarousle>
      <Gallery />
      <Faq/>
      <Schedule></Schedule>
      <Footer />
    </div>
  );
};

export default Home;