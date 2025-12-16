import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/Lights purple.json";
import HomeCard from "../Cards/HomeCard";
import lambo3 from "../../assets/Lembo-3.jpg";
// import lambo4 from "../../assets/Lambo-4.jpg";
// import lambo5 from "../../assets/Lambo-5.jpg";
import Configure from "./Configure";
import Gallery from "./Gallery";
import Contact from "./Contact";

const HomePage = ({ modelRef, configureRef, galleryRef, contactRef }) => {
  return (
    <>
      <div ref={modelRef} className="text-center pt-12 pb-6  md:py-16">
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
      <div className="max-w-full w-full gap-4 mx-auto px-2 relative">
        <div className="absolute top-0  blur-md animate-pulse"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HomeCard />
        </motion.div>
      </div>
      {/* Why Lamborghini */}
      <section className="relative w-full bg-gray-900 text-white py-24 px-4 overflow-hidden">
        <motion.div
          className="max-w-7xl w-full mx-auto text-center md:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-orange-100 font-light italic">Italian </span>
            <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Engineering
            </span>
            <span className="text-white">
              . Extreme Performance. Iconic Design.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed md:max-w-3xl">
            Designed for speed and engineered with absolute precision, every
            detail of a Lamborghini is crafted to ignite pure adrenaline. From
            its iconic roar to its flawless aerodynamics, it embodies dominance
            on every road it touches—power, passion, and perfection in motion.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className=" absolute buttom-4 left-1/4 md:left-28 py-3 px-6 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-lg border-2 border-orange-500/50 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 max-w-44 w-full group overflow-hidden transform origin-top-right cursor-pointer">
              {/* Hover linear Effect */}
              <span className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" />

              {/* Text */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </section>
      {/* Showroom section*/}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-12 pb-6 md:py-16 text-center"
        >
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
            <span className="text-orange-100 font-light italic">Find </span>
            <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              SHOWROOM
            </span>
            <span className="text-white"> LOCATION</span>
          </h2>
          <div className="hidden md:block h-px w-20 lg:w-32 bg-linear-to-l from-transparent via-red-500 to-red-500" />
        </motion.div>
        {/* Image with btn */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-full px-2 relative group overflow-hidden blur-[1px] hover:blur-none"
        >
          <img
            src={lambo3}
            alt=""
            className="w-full h-96 object-cover opacity-40 hover:opacity-100 transition duration-500 ease-in-out cursor-pointer group-hover:scale-105  overflow-hidden"
          />
          <div className="absolute top-10 left-10 group">
            <h1 className="text-3xl md:text-4xl uppercase font-medium backdrop-blur-2xl group-hover:bg-amber-600 group-hover:font-bold group-hover:text-black px-4 py-2 transition-all duration-300 ease-in-out">
              Dealer Locator
            </h1>
            {/* Button */}
            <button className="mt-5 py-3 px-6 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-lg border-2 border-orange-500/50 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 max-w-44">
              CALL DEALER
            </button>
          </div>
        </motion.div>
      </section>
      <Configure configureRef={configureRef} />
      <Gallery galleryRef={galleryRef} />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default HomePage;
