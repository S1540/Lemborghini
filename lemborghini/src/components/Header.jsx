import React from "react";

const Header = () => {
  return (
    <>
      <header class="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div class="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDreY6EuSz7loNPtlQtFFo1mPLuwUbJmHPQ&s"
            alt=""
            className="h-16 w-16 object-cover"
          />

          <nav class="hidden md:flex space-x-8 text-white text-sm font-medium">
            <a href="#" class="hover:text-[#D4AF37] transition">
              Models
            </a>
            <a href="#" class="hover:text-[#D4AF37] transition">
              Customization
            </a>
            <a href="#" class="hover:text-[#D4AF37] transition">
              Dealers
            </a>
            <a href="#" class="hover:text-[#D4AF37] transition">
              About
            </a>
            <a href="#" class="hover:text-[#D4AF37] transition">
              Contact
            </a>
          </nav>

          <div class="flex items-center space-x-5 text-white text-xl">
            <i class="fa-solid fa-magnifying-glass hover:text-[#D4AF37] cursor-pointer"></i>
            <i class="fa-solid fa-bars md:hidden hover:text-[#D4AF37] cursor-pointer"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
