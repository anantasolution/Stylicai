import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/Aboutus/About";
import Contactus from "./pages/Contact-us/Contactus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <>
              <Navbar />
              <Catalog />
              <Footer />
            </>
          }
        /><Route path="/about" element={<><Navbar /><About /><Footer /></>}/>
        <Route path="/contact" element={<><Navbar /><Contactus /><Footer /></>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
