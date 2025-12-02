import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import urus from "../../assets/urus.webp";
import Huracan from "../../assets/Huracan.webp";
import Temerario from "../../assets/Temerario.webp";
import Revuelto from "../../assets/Revuelto.webp";

const HomeCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const models = [
    {
      image: urus,
      model: "URUS",
      tagline: "DARE TO LIVE MORE",
    },
    {
      image: Huracan,
      model: "HURACÁN",
      tagline: "PRECISION IN MOTION",
    },
    {
      image: Temerario,
      model: "TEMERARIO",
      tagline: "THE ULTIMATE V12",
    },
    {
      image: Revuelto,
      model: "REVUELTO",
      tagline: "THE ULTIMATE V12",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + models.length) % models.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[500px] rounded-lg overflow-hidden group">
      {/* Images */}
      <div className="relative h-full">
        {models.map((model, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out max-w-full w-full ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            <p className=" text-2xl sm:text-3xl text-center model-heading tracking-widest">
              {model.model}
            </p>
            <p className="text-3xl sm:text-5xl text-center text-zinc-500 heading font-medium">
              {model.tagline}
            </p>
            <img
              src={model.image}
              className="w-full sm:max-w-[75%] sm:w-full h-full object-contain mx-auto"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {models.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-orange-500 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
