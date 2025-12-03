import React from "react";

const FeaturedCrads = () => {
  return (
    <div>
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured Models
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Explore the perfect fusion of engineering, design and performance.
          </p>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/20"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-400 mb-4">{car.desc}</p>

                  <button className="px-5 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCrads;
