import React, { useState } from "react";
import { ArrowRight, Zap, Gauge, Award } from "lucide-react";
import lembo3 from "../../assets/Lembo-3.jpg";

const HomeCard = ({
  image,
  model,
  tagline,
  power,
  speed,
  acceleration,
  price,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full max-w-md h-[500px] rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={model}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/90 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 via-transparent to-red-600/30 mix-blend-overlay" />
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-lg border-2 border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500" />
      <div className="absolute -inset-1 bg-linear-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 blur-xl rounded-3xl transition-all duration-500 -z-10" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top Section - Badge */}
        <div className="flex justify-between items-start">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-orange-500/40 transition-all duration-500 ${
              isHovered
                ? "bg-linear-to-r from-orange-500/30 to-red-500/30 border-orange-500"
                : ""
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-100 font-bold text-xs tracking-wider uppercase">
              New
            </span>
          </div>

          {/* Price - Slides in on hover */}
          <div
            className={`px-4 py-2 bg-linear-to-r from-orange-500 to-red-600 rounded-full transform transition-all duration-500 ${
              isHovered
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <span className="text-white font-black text-sm">{price}</span>
          </div>
        </div>

        {/* Middle Section - Model Name */}
        <div className="space-y-3">
          <div
            className={`transform transition-all duration-500 ${
              isHovered ? "translate-y-0" : "translate-y-4"
            }`}
          >
            <p className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-2">
              {tagline}
            </p>
            <h3 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter">
              {model}
            </h3>
            <div
              className={`h-1 bg-linear-to-r from-orange-500 to-red-500 rounded-full mt-4 transition-all duration-500 ${
                isHovered ? "w-32" : "w-16"
              }`}
            />
          </div>
        </div>

        {/* Bottom Section*/}
        <div className="space-y-4">
          <div
            className={`grid grid-cols-3 gap-3 transform transition-all duration-500 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }`}
          >
            <div className="p-3 bg-black/60 backdrop-blur-xl rounded-lg border border-orange-500/30">
              <Zap className="w-4 h-4 text-orange-500 mb-1" />
              <div className="text-white font-black text-sm">{power}</div>
              <div className="text-gray-400 text-xs font-semibold">Power</div>
            </div>

            <div className="p-3 bg-black/60 backdrop-blur-xl rounded-xl border border-red-500/30">
              <Gauge className="w-4 h-4 text-red-500 mb-1" />
              <div className="text-white font-black text-sm">{speed}</div>
              <div className="text-gray-400 text-xs font-semibold">
                Top Speed
              </div>
            </div>

            <div className="p-3 bg-black/60 backdrop-blur-xl rounded-xl border border-orange-500/30">
              <Award className="w-4 h-4 text-orange-500 mb-1" />
              <div className="text-white font-black text-sm">
                {acceleration}
              </div>
              <div className="text-gray-400 text-xs font-semibold">0-100</div>
            </div>
          </div>

          {/* CTA Button - Slides up on hover */}
          <div
            className={`transform transition-all duration-500 delay-100 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <button className="w-full group/btn relative px-6 py-4 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-full font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Explore {model}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Corner Accent - Top Right */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-orange-500/20 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Corner Accent - Bottom Left */}
      <div
        className={`absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-red-500/20 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
export default HomeCard;
