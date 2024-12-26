import React, { useState, useEffect } from "react";
import img from "../../assets/Abou.jpg";
export default function About() {
  // Carousel data

  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 550);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);

  const carouselTexts = [
    {
      text: "I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.",
      name: "Lete Mehari",
      title: "Customer",
    },
    {
      text: "I am so pleased with this product. Absolutely wonderful! You wouldn't regret it. It's really wonderful. Definitely worth the investment.",
      name: "Gabriel Bisrat",
      title: "Customer",
    },
    {
      text: "We've used web design agency for the last five years. We can't understand how we've been living without it. Thank you!",
      name: "Aziz Amanuel",
      title: "Customer",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselTexts.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-36 pb-28 md:px-12">
        {/* Left Section with Circular Image */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Circle with Text */}

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-full w-80 h-80 md:w-96 md:h-96 shadow-lg">
              <img
                src={img} // Replace with your actual imported image
                alt="Design Solution"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="flex-1 mt-12 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-5xl font-semibold text-navyblue leading-tight mb-6">
            We Provide Best Design Solutions
          </h2>
          <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
            Tremendous involvement with power and departure, land master
            curement, liaisoning and working with state.
          </p>
          <ul className="space-y-4 font-medium text-navyblue">
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Support that
              Helps.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> An abundance
              of resources.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Optimize
              search engines.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white pt-10 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[300px] max-h-[350px] px-6 md:px-32 text-start relative">
          {/* Left Navigation Arrow */}
          {!isMobileSize && <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? carouselTexts.length - 1 : currentIndex - 1
              )
            }
            className="absolute h-10 left-6 md:left-20 text-white -bottom-20 md:top-1/2 bg-navyblue p-2 rounded-full shadow-md  focus:outline-none"
          >
            &#8592; {/* Left Arrow */}
          </button>}

          {/* Testimonial Text */}
          <p className="text-3xl text-gray-800 font-medium italic max-w-3xl mb-6">
            {carouselTexts[currentIndex].text}
          </p>

          {/* Client Details */}
          <div className="w-4/5 px-6 mt-2">
            <p className="text-gray-800 font-semibold text-xl">
              {carouselTexts[currentIndex].name}
            </p>
            <p className="text-gray-800 text-sm">
              {carouselTexts[currentIndex].title}
            </p>
          </div>

          {/* Right Navigation Arrow */}
          {!isMobileSize && <button
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % carouselTexts.length)
            }
            className="absolute h-10 right-6 text-white md:right-20 -bottom-20 md:top-1/2  bg-navyblue p-2 rounded-full shadow-md  bfocus:outline-none"
          >
            &#8594; {/* Right Arrow */}
          </button>}
        </div>
      </div>

      {/* Additional Section */}
      <div className="container mx-auto px-6 md:px-12 pt-10 pb-16">
        <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Why Choose Us?
        </h3>
        <div className="grid px-12 grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Innovative Solutions
            </h4>
            <p className="text-gray-600">
              We bring creativity and innovation to every project we handle,
              ensuring you stand out.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Dedicated Team
            </h4>
            <p className="text-gray-600">
              Our team is committed to delivering the best outcomes for your
              business.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Proven Results
            </h4>
            <p className="text-gray-600">
              We have a track record of success with satisfied clients across
              the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
