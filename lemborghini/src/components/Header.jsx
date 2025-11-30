import React, { useRef, useState } from "react";
import { Mic } from "lucide-react";
import lemboSound from "../assets/lemboMp3.mp3";

const Header = () => {
  const audioRef = useRef(null);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <img
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.muted = !audioRef.current.muted;
                }
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDreY6EuSz7loNPtlQtFFo1mPLuwUbJmHPQ&s"
              alt="Logo"
              className="relative h-16 w-16 object-cover rounded-full border-2 border-yellow-400/50 group-hover:border-green-400 transition duration-300 cursor-pointer"
            />
            <audio ref={audioRef} autoPlay muted loop src={lemboSound}></audio>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-white text-lg font-medium">
            <a
              href="#"
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Models
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Customization
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Dealers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative hover:text-yellow-400 transition duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-5 text-white text-xl">
            <button className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <i className="fa-solid fa-magnifying-glass relative hover:text-yellow-400 cursor-pointer transition duration-300 group-hover:scale-110"></i>
            </button>
            <button className="md:hidden relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <i className="fa-solid fa-bars relative hover:text-yellow-400 cursor-pointer transition duration-300 group-hover:scale-110"></i>
            </button>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
      </header>
    </>
  );
};

export default Header;
