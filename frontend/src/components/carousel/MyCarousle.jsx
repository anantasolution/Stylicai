import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

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

export default function MyCarousle() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(false);
  const [enableSwipe] = useState(true);
  const [animationConfig] = useState(config.gentle);
  const [startX, setStartX] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={blazerThumbnails[0]} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={girlShirtThumbnails[0]} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={boysShirtThumbnails[1]} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={sweetShirtThumbnails[0]} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={boxerThumbnails[0]} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={topThumbnails[0]} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={camisoleThumbnails[0]} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={jeansThumbnails[0]} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={dressThumbnails[0]} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={boysJeansThumbnails[0]} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={braThumbnails[0]} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={tshirtThumbnails[0]} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={jacketThumbnails[0]} alt="8" />
    }
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index)
  }));

  // const items = [
  //   {
  //     id: uuidv4(),
  //     content:<img src={blazerThumbnails[0]}></img>,
  //     //rightImage: blazerImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content:<img src={girlShirtThumbnails[0]}></img>,
  //     // rightImage: girlShirtImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={boysShirtThumbnails[1]}></img>,
  //     // rightImage: boysShirtImages[1][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={sweetShirtThumbnails[0]}></img>,
  //     // rightImage: sweetShirtImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={boxerThumbnails[0]}></img>,
  //     // rightImage: boxerImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={topThumbnails[0]}></img>,
  //     // rightImage: topImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={camisoleThumbnails[0]}></img>,
  //     // rightImage: camisoleImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={jeansThumbnails[0]}></img>,
  //     // rightImage: jeansImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={dressThumbnails[0]}></img>,
  //     // rightImage: dressImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={boysJeansThumbnails[0]}></img>,
  //     // rightImage: boysJeansImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={braThumbnails[0]}></img>,
  //     // rightImage: braImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={tshirtThumbnails[0]}></img>,
  //     rightImage: tshirtImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={jacketThumbnails[0]}></img>,
  //     // rightImage: jacketImages[0][0],
  //   },
  // ].map((slide, index) => ({
  //   ...slide,
  //   onClick: () => setGoToSlide(index)
  // }));

  const handleTouchStart = (event) => {
    const firstTouch = event.touches[0];
    setStartX(firstTouch.clientX);
  };

  const handleTouchMove = (event) => {
    if (!enableSwipe) return;

    const touch = event.touches[0];
    const diffX = startX - touch.clientX;

    if (diffX > 50) {
      setGoToSlide((prev) => (prev + 1) % slides.length); // Swipe left
    } else if (diffX < -50) {
      setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length); // Swipe right
    }
  };

  return (
    <div className="py-20">
     <div className="flex justify-center items-center">
       <h1 className="text-3xl font-medium text-navyblue">Product Slider</h1>
     </div>
     <div
       style={{ width: "80%", height: "500px", margin: "0 auto" }}
       onTouchStart={handleTouchStart}
       onTouchMove={handleTouchMove}
     >
       <Carousel
         slides={slides}
         goToSlide={goToSlide}
         offsetRadius={offsetRadius}
         showNavigation={showNavigation}
         animationConfig={animationConfig}
       />
    </div>
    </div>
  );
}
