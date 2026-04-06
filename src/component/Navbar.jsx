import React, { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaDribbble, FaMediumM } from "react-icons/fa";
import NavbarLogo from '../assets/Navbar-Logo.png';

const Navbar = ({ variant = "none" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-30 py-4 flex items-center justify-between ${
        variant !== "full" ? "pr-100" : ""
      } ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <div className="bg-white p-2 rounded-4xl flex items-center justify-center w-20 shadow-sm">
          <img
            src={NavbarLogo}
            alt="Teman Canggih Logo"
            className="h-10  object-contain"
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center space-x-8 list-none">
        <li>
          <a
            href="#home"
            className="text-white text-sm font-medium tracking-widest hover:text-blue-400 transition-colors uppercase"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white text-sm font-medium tracking-widest hover:text-blue-400 transition-colors uppercase"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-white text-sm font-medium tracking-widest hover:text-blue-400 transition-colors uppercase"
          >
            PROJECTS
          </a>
        </li>

        {variant === "home" && (
          <li>
            <a
              href="#expertise"
              className="text-white text-sm font-medium tracking-widest hover:text-blue-400 transition-colors uppercase"
            >
              EXPERTISE
            </a>
          </li>
        )}

        {variant === "home" && (
          <li>
            <a
              href="#consultation"
              className="text-white text-sm font-medium tracking-widest hover:text-blue-400 transition-colors uppercase"
            >
              CONSULTATION
            </a>
          </li>
        )}

        <li>
          <a
            href="#contact"
            className="text-white text-sm font-medium tracking-widest hover:text-blue-400 transition-colors uppercase"
          >
            CONTACT
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-5 text-white">
        <a href="#" className="hover:text-blue-400 transition-colors text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-pink-500 transition-colors text-xl">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-orange-400 transition-colors text-xl">
          <FaDribbble />
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors text-xl">
          <FaMediumM />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
