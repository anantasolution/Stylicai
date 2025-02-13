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
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<><Navbar/><ShowCase/><Footer/></>}></Route>
        <Route path="/about" element={<><Navbar /><About /><Footer /></>}/>
        <Route path="/contact" element={<><Navbar /><Contactus /><Footer /></>}/>
        <Route path="/registeruser" element={<><Navbar/><MRegister/><Footer/></>}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;