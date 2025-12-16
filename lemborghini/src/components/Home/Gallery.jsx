import React, { useState } from "react";
import { motion } from "framer-motion";
import models from "./models.json";
import { Menu } from "lucide-react";

const Gallery = ({ galleryRef }) => {
  const [showModel, setShowModel] = useState("Aventador");
  const [showMenu, setShowMenu] = useState(false);
  const currentModel = models.find((model) => model.name === showModel);

  const getImageClass = (index) => {
    const patterns = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      <section ref={galleryRef} className="min-h-screen py-10 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6  md:py-14 text-center sticky top-24 py-5 z-30 bg-[#0f0b0b] sm:bg-transparent sm:relative sm:top-0"
        >
          <div className="hidden md:block h-px w-20 lg:w-32 bg-linear-to-r from-transparent via-orange-500 to-orange-500" />

          {/* Badge */}
          <div className="flex md:flex-none justify-between max-w-full md:w-auto w-full px-6 ">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-linear-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-full border border-orange-500/40">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-100 font-bold text-xs tracking-wider uppercase">
                Since 1963
              </span>
            </div>
            {/* Menu */}
            <Menu
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden cursor-pointer"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-orange-100 font-light italic">The </span>
            <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              ART OF
            </span>
            <span className="text-white"> SPEED</span>
          </h2>

          <div className="hidden md:block h-px w-20 lg:w-32 bg-linear-to-l from-transparent via-red-500 to-red-500" />
        </motion.div>

        {/* Content Section */}
        <div className="max-w-full w-full pl-6 md:pl-20 mx-auto px-6 relative py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            {/* Left Sidebar */}
            <div
              className={`md:block lg:col-span-3 lg:sticky lg:top-24 h-fit transition-all duration-300 ease-in-out origin-top ${
                showMenu ? "block sticky top-40 z-40 bg-black/60 " : "hidden"
              }`}
            >
              <div className="p-6 bg-linear-to-br from-orange-500/5 via-red-500/5 to-transparent backdrop-blur-xl rounded-lg border border-orange-500/20 shadow-2xl">
                <h3 className="font-black tracking-widest text-xl mb-6 bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  COLLECTIONS
                </h3>

                <div className="flex flex-col gap-2">
                  {models.map((model, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() =>
                          setShowModel(model.name) || setShowMenu(false)
                        }
                        className={`w-full text-left px-4 py-3 rounded-lg font-bold tracking-wide transition-all duration-300 ${
                          showModel === model.name
                            ? "bg-linear-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30"
                            : "text-gray-400 hover:text-orange-400 hover:bg-white/5"
                        }`}
                      >
                        {model.name}
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Count */}
                <div className="mt-6 pt-6 border-t border-orange-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-semibold">
                      Total Images
                    </span>
                    <span className="text-2xl font-black bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {currentModel?.images.length || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Masonry Gallery */}
            <motion.div
              key={showModel}
              initial={{ opacity: 0, y: 160 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-9 pb-24 lg:pb-0"
            >
              {currentModel && (
                <motion.div
                  key={showModel}
                  initial={{ opacity: 0, y: 160 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4"
                >
                  {currentModel.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`group relative overflow-hidden rounded-lg ${getImageClass(
                        index
                      )} cursor-pointer`}
                    >
                      <img
                        src={image}
                        alt={`${showModel} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-white font-black text-lg">
                          {showModel}
                        </h4>
                        <p className="text-orange-400 text-sm font-semibold">
                          Gallery {index + 1}
                        </p>
                      </div>

                      <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-lg transition-all duration-500" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
