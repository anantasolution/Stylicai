import React, { useEffect, useRef, useState } from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
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
  jacketImages
} from "../../assets/assets.js";

// Importing Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = {
    blazer: {
      thumbnails: blazerThumbnails,
      images: blazerImages,
    },
    "girl's shirt": {
      thumbnails: girlShirtThumbnails,
      images: girlShirtImages,
    },
    "boys shirt": {
      thumbnails: boysShirtThumbnails,
      images: boysShirtImages,
    },
    "sweat shirt": {
      thumbnails: sweetShirtThumbnails,
      images: sweetShirtImages,
    },
    boxer: {
      thumbnails: boxerThumbnails,
      images: boxerImages,
    },
    top: {
      thumbnails: topThumbnails,
      images: topImages,
    },
    camisole: {
      thumbnails: camisoleThumbnails,
      images: camisoleImages,
    },
    jeans: {
      thumbnails: jeansThumbnails,
      images: jeansImages,
    },
    dresse: {
      thumbnails: dressThumbnails,
      images: dressImages,
    },
    "boys jean": {
      thumbnails: boysJeansThumbnails,
      images: boysJeansImages,
    },
    bra: {
      thumbnails: braThumbnails,
      images: braImages,
    },
    "t-shirt": {
      thumbnails: tshirtThumbnails,
      images: tshirtImages,
    },
    jacket: {
      thumbnails: jacketThumbnails,
      images: jacketImages,
    },
  };

  const [activeCategory, setActiveCategory] = useState("blazer");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(categories["blazer"].images[0][0]);
  const [activeTypes, setActiveTypes] = useState(categories["blazer"].images[0]);

  // Handle Category Change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTypes(categories[category].images[0]); // Set images of the first product in the new category
    setSelectedImage(categories[category].images[0][0]); // Set the default image of the new category
    setActiveIndex(0); // Reset to the first thumbnail
  };

  // Handle Image Click
  const handleImageClick = (index) => {
    setSelectedImage(activeTypes[index]);
  };

  // Handle Thumbnail Click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setActiveTypes(categories[activeCategory].images[index]);
    setSelectedImage(categories[activeCategory].images[index][0]); // Set the first image of the selected product
  };

  return (
    <div className="min-h-screen text-navyblue relative bg-white pb-10">
      {/* Header Section */}
      <div className="w-full text-center py-10 flex flex-col gap-y-5 bg-white">
        <p className="text-4xl font-bold">Experience Stylic's AI Photoshoot Today</p>
        <p className="text-xl text-gray-600">
          Experience the future of product photography with Stylic AI-driven photoshoots,<br></br> delivering high-quality, captivating images in no time.
        </p>
      </div>

      {/* Category Section with Swiper JS */}
      <div className="relative w-full mb-6 p-4">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]}
          lazyPreloadPrevNext={true}
          spaceBetween={20}
          slidesPerView={8}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="rounded-lg overflow-hidden"
          breakpoints={{
            1200: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
          }}
        >
          {Object.keys(categories).map((category) => (
            <SwiperSlide key={category}>
              <button
                className={`border w-36 border-[#1b345c] rounded-md sm:rounded-full p-2 lg:p-3 transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#1b345c] text-white font-semibold"
                    : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap lg:flex-row w-full">
        {/* Left Section - Image */}
        <div className="lg:w-[40%] w-full flex justify-center items-center">
          <div className="lg:w-3/4 w-4/5 h-full">
            <img
              src={selectedImage}
              alt="Model"
              className="h-full w-full object-cover rounded-md shadow-lg pb-10 lg:pb-0"
            />
          </div>
        </div>

        {/* Right Section - Transparent Div with Dynamic Height */}
        <div className="lg:w-[55%] w-full bg-white/70 backdrop-blur-md p-10 rounded-md border border-gray-300 flex flex-col">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CheckroomIcon style={{ color: "#3f3f3f" }} />
              <p className="text-[#3f3f3f] font-medium text-xl">Product</p>
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
              {categories[activeCategory].thumbnails.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-full rounded-md shadow-lg cursor-pointer overflow-hidden ${
                    activeIndex === index
                      ? "border-4 border-[#1b345c]"
                      : "border border-transparent"
                  }`}
                >
                  <img
                    src={item}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Photoshoot Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CameraAltOutlinedIcon />
              <p className="text-[#3f3f3f] font-medium text-xl">Photoshoot</p>
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-4 gap-4">
              {activeTypes.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`w-full h-58 rounded-md shadow-lg cursor-pointer overflow-hidden ${
                    selectedImage === item
                      ? "border-4 border-[#1b345c]"
                      : "border border-transparent"
                  }`}
                >
                  <img
                    src={item}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
