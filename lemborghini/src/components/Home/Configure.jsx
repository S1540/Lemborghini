import React, { useState } from "react";
import { motion } from "framer-motion";
import revuelto from "../../assets/configure-revuelto.webp";
import temerario from "../../assets/configure-temerario.webp";
import urus from "../../assets/configure-urus.webp";

const Configure = () => {
  const [active, setActive] = useState("REVUELTO");
  const models = [
    {
      name: "REVUELTO",
      image: revuelto,
    },
    {
      name: "TEMERARIO",
      image: temerario,
    },
    {
      name: "URUS SE",
      image: urus,
    },
  ];
  const currentActive = models.find((model) => model.name === active);

  return (
    <>
      <section className="py-10 md:py-16">
        {/* Model Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-6 md:gap-10 mb-12"
        >
          {models.map((model, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-orange-400 transition duration-300 text-center"
              onClick={() => setActive(model.name)}
            >
              <h6
                className={`text-sm md:text-base font-bold tracking-wider ${
                  active === model.name ? "text-orange-400" : "text-gray-300"
                }`}
              >
                {model.name}
              </h6>
              <span
                className={`h-0.5 w-20 md:w-28 inline-block mt-2 transition-all duration-300 ${
                  active === model.name
                    ? "bg-linear-to-r from-orange-500 to-red-500"
                    : "bg-gray-600"
                }`}
              ></span>
            </div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-full w-full mx-auto pl-6 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <div className="space-y-3">
              <h4 className="text-2xl md:text-3xl font-light text-gray-300 uppercase tracking-wide">
                Configure Your
              </h4>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
                <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  {active}
                </span>
              </h3>
              <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-red-500 rounded-full mx-auto md:mx-0" />
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              aperiam distinctio praesentium iste doloremque aspernatur illo
              soluta obcaecati commodi dolores minus magnam architecto error,
              quisquam saepe illum eveniet magni similique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start pr-4">
              <button className="group relative py-3 px-8 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-lg border-2 border-orange-500/50 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">CONFIGURE</span>
              </button>
              <button className="group py-3 px-8 bg-black/40 backdrop-blur-xl text-white font-black text-sm uppercase tracking-wider rounded-lg border-2 border-orange-500/50 hover:border-red-500 hover:bg-black/60 transition-all duration-300 cursor-pointer">
                EXPLORE
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/20 to-red-500/20 blur-3xl opacity-50 animate-pulse" />
            <img
              src={currentActive.image}
              alt={active}
              className="relative w-full h-auto object-contain transition-all duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Configure;
