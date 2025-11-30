import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Zap, Award, Gauge, ChevronDown } from "lucide-react";
import lembo from "../../assets/Lembo-2.jpg";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className=" relative overflow-hidden"
      style={{ marginTop: "80px" }}
    >
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black z-10" />
        <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 via-red-600/15 to-black z-10 mix-blend-overlay" />
        <img
          src={lembo}
          alt="Lamborghini"
          className="object-cover w-full h-full scale-105"
        />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.0s" }}
        />
      </div>

      {/* Left Vertical Watermark */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-20">
        <div
          className="text-8xl md:text-9xl font-black text-orange-500/20 tracking-tighter leading-none rotate-180"
          style={{
            writingMode: "vertical-rl",
            textShadow: "0 0 30px rgba(249, 115, 22, 0.3)",
          }}
        >
          RAGING BULL
        </div>
      </div>

      {/* Right Vertical Watermark */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-20">
        <div
          className="text-8xl md:text-9xl font-black text-red-500/20 tracking-tighter leading-none"
          style={{
            writingMode: "vertical-rl",
            textShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
          }}
        >
          SUPERCAR
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-between py-6 px-4 md:px-8">
        {/* Top Corner Elements */}
        <div
          className={`flex justify-between items-start transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-full border border-orange-500/40 text-xs md:text-sm">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50" />
            <span className="text-orange-100 font-bold">
              ITALIAN LEGACY SINCE 1963
            </span>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          {/* Mobile/Tablet: Stacked */}
          <div
            className={`block lg:hidden w-full max-w-6xl space-y-6 md:space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center space-y-4">
              <div className="inline-block px-6 py-2 bg-linear-to-r from-orange-500 to-red-600 rounded-full mb-4">
                <span className="text-black font-black text-sm tracking-widest">
                  SUPER SPORT
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                LAMBORGHINI
              </h1>

              <div className="flex items-center justify-center gap-4">
                <div className="h-1 w-16 bg-linear-to-r from-transparent via-orange-500 to-red-500 rounded-full" />
                <span className="text-3xl md:text-5xl font-light text-orange-100 italic">
                  Experience
                </span>
                <div className="h-1 w-16 bg-linear-to-l from-transparent via-red-500 to-orange-500 rounded-full" />
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  UNLEASHED POWER
                </span>
              </h2>
            </div>

            <p className="text-center text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Feel the rush of{" "}
              <span className="text-orange-500 font-bold">740+ horsepower</span>
              , crafted with{" "}
              <span className="text-red-500 font-bold">Italian precision</span>
            </p>

            {/* Specs */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-5 py-3 bg-black/60 backdrop-blur-lg rounded-xl border border-orange-500/30 text-orange-400 text-sm font-black shadow-xl shadow-orange-500/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>2.8s 0-100</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-black/60 backdrop-blur-lg rounded-xl border border-red-500/30 text-red-400 text-sm font-black shadow-xl shadow-red-500/10">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  <span>355 km/h</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-black/60 backdrop-blur-lg rounded-xl border border-orange-500/30 text-orange-400 text-sm font-black shadow-xl shadow-orange-500/10">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>V12 Engine</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <button className="group relative px-10 py-4 bg-linear-to-r from-orange-500 via-red-600 to-orange-500 text-white rounded-full font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-red-600 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">CONFIGURE YOUR LAMBO</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-10 py-4 bg-black/40 backdrop-blur-xl text-white rounded-full font-black text-lg border-2 border-orange-500/50 hover:border-red-500 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:bg-black/60">
                <Play className="w-5 h-5 fill-white group-hover:fill-orange-400 transition-colors" />
                <span>WATCH THE ROAR</span>
              </button>
            </div>
          </div>

          {/* Desktop: Split Layout */}
          <div
            className={`hidden lg:grid lg:grid-cols-2 gap-20 xl:gap-32 items-center w-full max-w-7xl px-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Left Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-linear-to-r from-orange-500 to-red-600 rounded-full">
                  <span className="text-black font-black text-sm tracking-widest">
                    SUPER SPORT
                  </span>
                </div>

                <h1 className="text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter">
                  LAMBORGHINI
                </h1>

                <div className="flex items-center gap-6">
                  <div className="h-1 flex-1 bg-linear-to-r from-orange-500 via-red-500 to-transparent rounded-full shadow-lg shadow-orange-500/30" />
                  <span className="text-4xl xl:text-5xl font-light text-orange-100 italic">
                    Experience
                  </span>
                </div>
              </div>

              <p className="text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Feel the raw power of{" "}
                <span className="text-orange-500 font-black">
                  740+ horsepower
                </span>{" "}
                engineered with
                <span className="text-red-500 font-black">
                  {" "}
                  Italian perfection
                </span>{" "}
                and
                <span className="text-orange-500 font-black">
                  {" "}
                  legendary craftsmanship
                </span>
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-black/60 backdrop-blur-lg rounded-2xl border border-orange-500/30 shadow-xl shadow-orange-500/10">
                  <Zap className="w-6 h-6 text-orange-500 mb-2" />
                  <div className="text-2xl font-black text-white">2.8s</div>
                  <div className="text-xs text-gray-400 font-semibold">
                    0-100 km/h
                  </div>
                </div>
                <div className="p-4 bg-black/60 backdrop-blur-lg rounded-2xl border border-red-500/30 shadow-xl shadow-red-500/10">
                  <Gauge className="w-6 h-6 text-red-500 mb-2" />
                  <div className="text-2xl font-black text-white">355</div>
                  <div className="text-xs text-gray-400 font-semibold">
                    km/h Max
                  </div>
                </div>
                <div className="p-4 bg-black/60 backdrop-blur-lg rounded-2xl border border-orange-500/30 shadow-xl shadow-orange-500/10">
                  <Award className="w-6 h-6 text-orange-500 mb-2" />
                  <div className="text-2xl font-black text-white">V12</div>
                  <div className="text-xs text-gray-400 font-semibold">
                    Engine
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xl:flex-row gap-4 pt-4">
                <button className="group relative px-10 py-4 bg-linear-to-r from-orange-500 via-red-600 to-orange-500 text-white rounded-full font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-red-600 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">CONFIGURE</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group px-10 py-4 bg-black/40 backdrop-blur-xl text-white rounded-full font-black text-lg border-2 border-orange-500/50 hover:border-red-500 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:bg-black/60">
                  <Play className="w-5 h-5 fill-white group-hover:fill-orange-400 transition-colors" />
                  <span>WATCH</span>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-7xl xl:text-8xl font-black leading-none tracking-tighter">
                  <span className="relative inline-block">
                    <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                      UNLEASHED
                    </span>
                    <div className="absolute -inset-8 bg-linear-to-r from-orange-500/30 via-red-500/30 to-orange-500/30 blur-3xl -z-10 animate-pulse" />
                  </span>
                </h2>

                <div className="flex items-center gap-6">
                  <h2 className="text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-none tracking-tighter">
                    POWER
                  </h2>
                  <div className="h-1 flex-1 bg-linear-to-l from-red-500 via-orange-500 to-transparent rounded-full shadow-lg shadow-red-500/30" />
                </div>
              </div>

              {/* Premium Feature Box */}
              <div className="relative p-8 bg-linear-to-br from-orange-500/10 via-red-500/10 to-black/40 backdrop-blur-xl rounded-3xl border border-orange-500/40 shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-50 rounded-3xl" />
                <div className="relative space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/50 rotate-3">
                      <span className="text-3xl font-black text-white">
                        60+
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-black text-white mb-1">
                        Years of Heritage
                      </div>
                      <div className="text-sm text-orange-400 font-bold">
                        Born from Racing DNA
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-orange-500 pl-4">
                    Every Lamborghini embodies the spirit of the{" "}
                    <span className="text-orange-400 font-bold">
                      raging bull
                    </span>{" "}
                    – untamed, powerful, and absolutely unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Adjusted spacing */}
        <div className="py-6">
          <div className="max-w-5xl mx-auto px-5 py-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-orange-500/30 shadow-2xl">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-bold uppercase">
                  Owners
                </div>
              </div>

              <div className="text-center space-y-1 border-x border-orange-500/30">
                <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                  60+
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-bold uppercase">
                  Years
                </div>
              </div>

              <div className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-bold uppercase">
                  Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="w-6 h-6 text-orange-500" />
          <div className="text-xs text-orange-400 font-bold tracking-wider">
            SCROLL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
