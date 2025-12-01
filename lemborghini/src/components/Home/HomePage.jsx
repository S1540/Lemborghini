import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/Lights purple.json";
import HomeCard from "../Cards/HomeCard";
import lambo3 from "../../assets/Lembo-3.jpg";
import lambo4 from "../../assets/Lambo-4.jpg";
import lambo5 from "../../assets/Lambo-5.jpg";

const HomePage = () => {
  const topThreeModels = [
    {
      image: lambo3,
      model: "AVENTADOR",
      tagline: "The Ultimate V12",
      power: "740 HP",
      speed: "355 km/h",
      acceleration: "2.8s",
      price: "₹6.25 Cr",
    },
    {
      image: lambo4,
      model: "HURACÁN",
      tagline: "Precision in Motion",
      power: "650 HP",
      speed: "325 km/h",
      acceleration: "2.9s",
      price: "₹4.75 Cr",
    },
    {
      image: lambo5,
      model: "URUS",
      tagline: "The Super SUV",
      power: "600 HP",
      speed: "305 km/h",
      acceleration: "3.6s",
      price: "₹3.50 Cr",
    },
  ];

  return (
    <>
      <div className="text-center py-12 md:py-16">
        {/* Badge + Heading + Line - Single Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="hidden md:block h-px w-20 lg:w-32 bg-linear-to-r from-transparent via-orange-500 to-orange-500" />
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-linear-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-full border border-orange-500/40">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-100 font-bold text-xs tracking-wider uppercase">
              Since 1963
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-orange-100 font-light italic">THE </span>
            <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              LEGEND
            </span>
            <span className="text-white"> COLLECTION</span>
          </h2>

          {/* Right Decorative Line */}
          <div className="hidden md:block h-px w-20 lg:w-32 bg-linear-to-l from-transparent via-red-500 to-red-500" />
        </div>
        <p className="text-gray-400 text-sm md:text-base mt-2 font-light">
          Discover Italian Excellence
        </p>
      </div>
      {/* Cards */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto px-2 relative">
        <div className="absolute top-0  blur-md animate-pulse"></div>
        {topThreeModels.map((model, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <HomeCard
              image={model.image}
              model={model.model}
              tagline={model.tagline}
              power={model.power}
              speed={model.speed}
              acceleration={model.acceleration}
              price={model.price}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
