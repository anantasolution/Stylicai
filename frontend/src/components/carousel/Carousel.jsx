import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  blazerThumbnails,
  blazerImages,
  girlShirtThumbnails,
  girlShirtImages,
  boysShirtThumbnails,
  boysShirtImages,
  sweetShirtThumbnails,
  sweetShirtImages,
  boxerThumbnails,
  boxerImages,
  topThumbnails,
  topImages,
  camisoleImages,
  camisoleThumbnails,
  jeansThumbnails,
  jeansImages,
  dressThumbnails,
  dressImages,
  boysJeansThumbnails,
  boysJeansImages,
  braThumbnails,
  braImages,
  tshirtThumbnails,
  tshirtImages,
  jacketThumbnails,
  jacketImages,
} from "../../assets/assets.js";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const items = [
    {
      id: 1,
      leftImage: blazerThumbnails[0],
      rightImage: blazerImages[0][0],
      title: "Comparison 1",
    },
    {
      id: 2,
      leftImage: girlShirtThumbnails[0],
      rightImage: girlShirtImages[0][0],
      title: "Comparison 2",
    },
    {
      id: 3,
      leftImage: boysShirtThumbnails[1],
      rightImage: boysShirtImages[1][0],
      title: "Comparison 3",
    },
    {
      id: 4,
      leftImage: sweetShirtThumbnails[0],
      rightImage: sweetShirtImages[0][0],
      title: "Comparison 4",
    },
    {
      id: 5,
      leftImage: boxerThumbnails[0],
      rightImage: boxerImages[0][0],
      title: "Comparison 5",
    },
    {
      id: 6,
      leftImage: topThumbnails[0],
      rightImage: topImages[0][0],
      title: "Comparison 6",
    },
    {
      id: 7,
      leftImage: camisoleThumbnails[0],
      rightImage: camisoleImages[0][0],
      title: "Comparison 7",
    },
    {
      id: 8,
      leftImage: jeansThumbnails[0],
      rightImage: jeansImages[0][0],
      title: "Comparison 8",
    },
    {
      id: 9,
      leftImage: dressThumbnails[0],
      rightImage: dressImages[0][0],
      title: "Comparison 9",
    },
    {
      id: 10,
      leftImage: boysJeansThumbnails[0],
      rightImage: boysJeansImages[0][0],
      title: "Comparison 10",
    },
    {
      id: 11,
      leftImage: braThumbnails[0],
      rightImage: braImages[0][0],
      title: "Comparison 11",
    },
    {
      id: 12,
      leftImage: tshirtThumbnails[0],
      rightImage: tshirtImages[0][0],
      title: "Comparison 12",
    },
    {
      id: 13,
      leftImage: jacketThumbnails[0],
      rightImage: jacketImages[0][0],
      title: "Comparison 13",
    },
  ];

  const visibleItems = 3; // Number of items to show at once
  const totalItems = [...items,...items,...items];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalItems - visibleItems ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden mx-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {totalItems.map((item) => (
              <div
                key={item.id}
                className="flex-none w-1/3 px-2"
              >
                <div 
                  className="relative h-[360px] rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Front Image */}
                  <img
                    src={item.leftImage}
                    alt={item.title}
                    className="w-full h-full object-contain bg-white transition-opacity duration-300"
                    style={{
                      opacity: hoveredCard === item.id ? 0 : 1,
                    }}
                  />
                  
                  {/* Back Image */}
                  <img
                    src={item.rightImage}
                    alt={`${item.title} Detail`}
                    className="absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-300"
                    style={{
                      opacity: hoveredCard === item.id ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalItems - visibleItems + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-gray-800 w-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;