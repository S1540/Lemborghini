import React, { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ configureRef, modelRef, galleryRef, contactRef }) => {
  const audioRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="group">
            <img
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.muted = !audioRef.current.muted;
                  console.log("Muted");
                }
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDreY6EuSz7loNPtlQtFFo1mPLuwUbJmHPQ&s"
              alt="Logo"
              className="relative h-16 w-16 object-cover rounded-full border-2 border-yellow-400/50 group-hover:border-green-400 transition duration-300 cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
            <button
              onClick={() => scrollToSection(modelRef)}
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Models
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Dealers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection(configureRef)}
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Customization
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button className="relative hover:text-yellow-400 transition duration-300 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="relative hover:text-yellow-400 transition duration-300 group cursor-pointer"
            >
              Articles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Action Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-yellow-400 transition duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="text-white hover:text-yellow-400 transition duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-black/95 border-t border-yellow-400/20">
            <button
              onClick={() => scrollToSection(modelRef)}
              className="text-white hover:text-yellow-400 transition duration-300 text-left"
            >
              Models
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="text-white hover:text-yellow-400 transition duration-300 text-left"
            >
              Dealers
            </button>
            <button
              onClick={() => scrollToSection(configureRef)}
              className="text-white hover:text-yellow-400 transition duration-300 text-left"
            >
              Customization
            </button>
            <button className="text-white hover:text-yellow-400 transition duration-300 text-left">
              About
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-white hover:text-yellow-400 transition duration-300 text-left"
            >
              Articles
            </button>

            {/* Mobile menuu Buttons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-yellow-400/20">
              <button className="text-white hover:text-yellow-400 transition duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="text-white hover:text-yellow-400 transition duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </header>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop autoPlay muted>
        <source src="lemboMp3.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Header;
