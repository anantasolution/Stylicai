import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Stylic/stylic-logo-1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/stylicai/product-demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a99431",
      });
    } else {
      console.error("Calendly script not loaded yet.");
    }
  };

  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full bg-white shadow-md z-40">
      {/* Navigation */}
      <nav className="container mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <span className="text-2xl cursor-pointer font-bold text-gray-800">
              <img src={logo} alt="logo" className="md:w-32 w-28" />
            </span>
          </Link>
        </div>

        {/* Large screen navbar links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex gap-8">
            <Link to={"/"}>
              <span
                className={` text-gray-800 rounded-full font-medium  px-2 py-1 transition duration-300 hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
                  isActive("/") &&
                  "underline decoration-golden underline-offset-4 decoration-2"
                }`}
              >
                Home
              </span>
            </Link>
            <Link to={"/showcase"}>
              <span
                className={`text-gray-800 rounded-full font-medium  px-2 py-1 transition duration-300 hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
                  isActive("/showcase") &&
                  "underline decoration-golden underline-offset-4 decoration-2"
                }`}
              >
                Showcase
              </span>
            </Link>
            <Link to={"/about"}>
              <span
                className={`text-gray-800 rounded-full font-medium  px-2 py-1 transition duration-300 hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
                  isActive("/about") &&
                  "underline decoration-golden underline-offset-4 decoration-2"
                }`}
              >
                About
              </span>
            </Link>
            <Link to={"/contactus"}>
              <span
                className={`text-gray-800 rounded-full font-medium  px-2 py-1 transition duration-300 hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
                  isActive("/contactus") &&
                  "underline decoration-golden underline-offset-4 decoration-2"
                }`}
              >
                Contact Us
              </span>
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={openCalendlyPopup}
            className="bg-golden text-white px-6 py-2 rounded-full hover:bg-navyblue transition duration-300"
          >
            Schedule a demo
          </button>
          <a href="https://app.stylic.ai">
            <button className="bg-golden text-white px-6 py-2 rounded-full hover:bg-navyblue transition duration-300">
              Login
            </button>
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none relative z-50"
          >
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 z-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`md:hidden top-0 ${
          isMenuOpen ? "right-0" : "-right-full"
        } border w-1/2 absolute  h-screen bg-white z-45 pt-20 transition-all duration-300`}
      >
        <div className="flex flex-col gap-3 items-center py-4 transition-all duration-300">
          <Link
            to={"/"}
            className={`text-gray-800 py-2  w-full text-center hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
              isActive("/") &&
              "underline decoration-golden underline-offset-4 decoration-2"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/showcase"}
            className={`text-gray-800 py-2 w-full text-center hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
              isActive("/showcase") &&
              "underline decoration-golden underline-offset-4 decoration-2"
            }`}
          >
            Showcase
          </Link>
          <Link
            to={"/about"}
            className={`text-gray-800 py-2 w-full text-center hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
              isActive("/about") &&
              "underline decoration-golden underline-offset-4 decoration-2"
            }`}
          >
            About
          </Link>
          <Link to={"/contactus"}>
            <span
              className={`text-gray-800 py-2 w-full text-center hover:underline hover:decoration-golden hover:underline-offset-4 hover:decoration-2 ${
                isActive("/contactus") &&
                "underline decoration-golden underline-offset-4 decoration-2"
              }`}
            >
              Contact Us
            </span>
          </Link>
          <a href="https://app.stylic.ai">
            <button className="bg-golden text-white px-6 py-2 rounded-full hover:bg-navyblue  transition duration-300">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
