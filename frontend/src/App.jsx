import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catalog from "./pages/Catalog/Catalog";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import About from "./components/Aboutus/About";
import MRegister from "./pages/ManagerRegister/MRegister";
import About from "./pages/Aboutus/About";
import Contactus from "./pages/Contact-us/Contactus";
import ShowCase from "./pages/showcase/ShowCase";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Policy from "./pages/TermsAndCondition/Policy";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/showcase"
          element={
            <>
              <Navbar />
              <ShowCase />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <Navbar />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route
          path="/registeruser"
          element={
            <>
              <Navbar />
              <MRegister />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <Policy />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
