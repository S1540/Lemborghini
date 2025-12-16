import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-orange-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Section - Newsletter */}
        <div className="mb-16 pb-12 border-b border-orange-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Newsletter Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h3>
              <p className="text-gray-400 text-base">
                Subscribe to receive the latest news, exclusive offers, and
                updates from Lamborghini.
              </p>
            </div>

            {/* Right - Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
              <button className="group px-8 py-4 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 place-items-center">
          {/* Column 1 - Models */}
          <div>
            <h4 className="text-orange-400 font-black text-sm uppercase tracking-wider mb-4">
              Models
            </h4>
            <ul className="space-y-3">
              {["Revuelto", "Huracán", "Urus", "Aventador", "Countach"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2 - Ownership */}
          <div>
            <h4 className="text-orange-400 font-black text-sm uppercase tracking-wider mb-4">
              Ownership
            </h4>
            <ul className="space-y-3">
              {[
                "Configurator",
                "Test Drive",
                "Find a Dealer",
                "Service & Parts",
                "Owner's Manual",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-orange-400 font-black text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Heritage",
                "Careers",
                "Sustainability",
                "Newsroom",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Experience */}
          <div>
            <h4 className="text-orange-400 font-black text-sm uppercase tracking-wider mb-4">
              Experience
            </h4>
            <ul className="space-y-3">
              {[
                "Museum",
                "Factory Tour",
                "Driving Experience",
                "Events",
                "Merchandise",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Support */}
          <div>
            <h4 className="text-orange-400 font-black text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "FAQ",
                "Privacy Policy",
                "Terms of Use",
                "Cookie Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mb-12 pb-12 border-b border-orange-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-4 bg-linear-to-br from-orange-500/5 to-transparent rounded-lg border border-orange-500/10">
              <div className="w-10 h-10 bg-linear-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm mb-1">
                  Headquarters
                </h5>
                <p className="text-gray-400 text-sm">
                  Sant'Agata Bolognese
                  <br />
                  Bologna, Italy
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 bg-linear-to-br from-orange-500/5 to-transparent rounded-lg border border-orange-500/10">
              <div className="w-10 h-10 bg-linear-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm mb-1">Phone</h5>
                <p className="text-gray-400 text-sm">
                  +39 051 6817611
                  <br />
                  24/7 Support
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-linear-to-br from-orange-500/5 to-transparent rounded-lg border border-orange-500/10">
              <div className="w-10 h-10 bg-linear-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm mb-1">Email</h5>
                <p className="text-gray-400 text-sm">
                  info@lamborghini.com
                  <br />
                  support@lamborghini.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Logo, Social, Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-3xl font-black mb-2">
              <span className="bg-linear-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                LAMBORGHINI
              </span>
            </h2>
            <p className="text-gray-500 text-sm font-semibold tracking-wider">
              EXPECT THE UNEXPECTED
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, link: "#" },
              { Icon: Instagram, link: "#" },
              { Icon: Twitter, link: "#" },
              { Icon: Youtube, link: "#" },
              { Icon: Linkedin, link: "#" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="group w-10 h-10 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-linear-to-r hover:from-orange-500 hover:to-red-600 hover:border-orange-500 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 pt-8 border-t border-orange-500/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Automobili Lamborghini (Shubham Singh)
            All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Cookie Settings
            </a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Legal Notice
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent" />
    </footer>
  );
};

export default Footer;
