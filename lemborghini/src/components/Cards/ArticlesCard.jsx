import React from "react";

const ArticlesCard = () => {
  return (
    <>
      <div className="max-w-xl w-full flex flex-col gap-4 py-10 ">
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg group cursor-pointer">
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/news/2025/12_01_turin/cover.jpg"
            alt="Lamborghini Article"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-2">
          {/* Tags */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-sm text-orange-400 text-xs font-bold uppercase tracking-wider">
              Articles
            </span>
            <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-sm text-gray-300 text-xs font-semibold uppercase tracking-wider">
              Motorsport
            </span>
          </div>

          {/* Date */}
          <p className="text-gray-400 text-sm font-medium">23 February 2025</p>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight hover:text-orange-400 transition-colors duration-300 cursor-pointer">
            Turin Motor Show 1965: the chassis that ignited the Miura legend
          </h2>

          {/* Optional Read More Link */}
          <button className="text-orange-500 font-semibold text-sm flex items-center gap-2 mt-2 hover:gap-3 transition-all duration-300 w-fit">
            Read More
            <svg
              className="w-4 h-4"
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
          </button>
        </div>
      </div>
    </>
  );
};

export default ArticlesCard;
