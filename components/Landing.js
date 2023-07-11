"use client";

import { useState } from "react";
import Image from "next/image";
import truckPic from "../public/images/crown-truck.jpg";
import towTruckPic from "../public/images/tow-truck.jpg";
import roadsideAssistancePic from "../public/images/roadside-assistance.jpg";
import emergencyTowingPic from "../public/images/emergency-tow.jpg";

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [truckPic, towTruckPic, roadsideAssistancePic, emergencyTowingPic];

  const texts = [
    "Dedicated Towing and Roadside Assistance",
    "Fast and Reliable Towing Services",
    "24/7 Roadside Assistance Solutions",
    "Emergency Towing Services at Your Service"
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative">
      <button
        className="arrow left-arrow"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="arrow right-arrow"
        onClick={handleNext}
      >
        &gt;
      </button>

      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`image-${index}`}
            />
          </div>
        ))}
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full flex items-start md:items-center justify-center bg-slate-800 bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold mt-5 md:mt-0">{texts[0]}</h2>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-start md:items-center justify-center bg-slate-800 bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          activeIndex === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold mt-5 md:mt-0">{texts[1]}</h2>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-start md:items-center justify-center bg-slate-800 bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          activeIndex === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold mt-5 md:mt-0">{texts[2]}</h2>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-start md:items-center justify-center bg-slate-800 bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          activeIndex === 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold mt-5 md:mt-0">{texts[3]}</h2>
      </div>
    </section>
  );
};

export default Landing;
