import { useState, useEffect } from "react";
import img from "../../assets/Abou.jpg";
import pf1 from "../../assets/profile_img_1.png";
import pf2 from "../../assets/profile_img_2.png";
import pf3 from "../../assets/profile_img_4.png";
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
      img: pf1,
    },
    {
      text: "I am so pleased with this product. Absolutely wonderful! You wouldn't regret it. It's really wonderful. Definitely worth the investment.",
      name: "Gabriel Bisrat",
      title: "Customer",
      img: pf2,
    },
    {
      text: "We've used web design agency for the last five years. We can't understand how we've been living without it. Thank you!",
      name: "Aziz Amanuel",
      title: "Customer",
      img: pf3,
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

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full"></div>
      {/* Main Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-44 pb-28 md:px-12">
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
            Behold the Future of Design Service
          </h2>
          <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
            Transform the way fashion comes to life with the help of our AI
            technology. From Hyper-Realistic Visuals to Brand Identity
            Revolutionisation, all Innovation is Made Simpler.
          </p>
          <ul className="space-y-4 font-medium text-gray-600">
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Expert
              advice at every step of the way.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Access to
              potent tools and resources.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> AI solutions
              that bring significant results.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Easy to
              integrate into your workflow.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Optimised
              visuals for a better online presence.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 flex justify-center items-center  py-20">
        <div className="flex flex-col items-center justify-center px-4 md:px-32 text-start relative">
          <h2 className="text-4xl font-bold text-navyblue mb-6">
            What Our Clients Say
          </h2>

          {/* Left Navigation Arrow */}
          {!isMobileSize && (
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0
                    ? carouselTexts.length - 1
                    : currentIndex - 1
                )
              }
              className="absolute h-10 w-10 left-6 md:left-20 text-white -bottom-20 md:top-1/2 bg-navyblue p-2 rounded-full shadow-md  focus:outline-none"
            >
              &#8249; {/* Left Arrow */}
            </button>
          )}

          {/* Testimonial Text */}
          <p className="text-2xl text-center text-gray-800 font-medium italic mb-6 mt-10">
            {carouselTexts[currentIndex].text}
          </p>

          <div className="flex items-center bg-transparent  rounded-lg p-4 max-w-lg mx-auto">
            {/* Left Section: Image */}
            <div className="w-16 h-16">
              <img
                className="rounded-full object-cover w-full h-full"
                src={carouselTexts[currentIndex].img} // Replace with the correct image URL
                alt={`${carouselTexts[currentIndex].name}'s avatar`}
              />
            </div>

            {/* Right Section: Name and Title */}
            <div className="ml-4">
              <p className="text-gray-800 font-semibold  text-lg">
                {carouselTexts[currentIndex].name}
              </p>
              <p className="text-gray-600 text-sm">
                {carouselTexts[currentIndex].title}
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          {!isMobileSize && (
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % carouselTexts.length)
              }
              className="absolute h-10  w-10 right-6 text-white md:right-20 -bottom-20 md:top-1/2  bg-navyblue p-2 rounded-full shadow-md  bfocus:outline-none"
            >
              &#8250; {/* Right Arrow */}
            </button>
          )}
        </div>
      </div>

      {/* Additional Section */}
      <div className="container mx-auto px-1 py-20 md:px-12 ">
        <h3 className="text-4xl font-bold text-navyblue mb-12 text-center">
          Why Choose Us?
        </h3>
        <div className="grid px-12 grid-cols-1  md:grid-cols-3 gap-10">
          <div className="bg-white p-8 shadow rounded-lg text-center ">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Exceptional Solutions
            </h4>
            <p className="text-gray-600">
              Fashion photography with the most advanced artificial intelligence
              technologies. Create imagery that mesmerises and makes your brand
              the talk of the town.
            </p>
          </div>
          <div className="bg-white p-8 shadow rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Devoted Team
            </h4>
            <p className="text-gray-600">
              Our enthusiastic experts combine their efforts to provide
              customised solutions that actualise your vision. In return, these
              efforts contribute to raising your brand status and visibility.
            </p>
          </div>
          <div className="bg-white p-8 shadow rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Proven Results
            </h4>
            <p className="text-gray-600">
              With a global track record of success, we empower brands with
              impactful visuals, leaving a lasting impression on audiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
