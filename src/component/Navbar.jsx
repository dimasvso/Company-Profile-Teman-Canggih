import React, { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaDribbble, FaMediumM, FaBars, FaTimes } from "react-icons/fa";
import NavbarLogo from '../assets/Navbar-Logo.png';

const Navbar = ({ variant = "none" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 px-6 lg:px-20 py-4 flex items-center justify-between ${
      isScrolled || isOpen ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      
      <div className="z-102">
        <div className="bg-white p-2 rounded-full flex items-center justify-center w-16 lg:w-20 shadow-sm">
          <img src={NavbarLogo} alt="Logo" className="h-6 lg:h-10 object-contain" />
        </div>
      </div>

      {/* Hamburger Icon - Muncul di bawah layar LG (Laptop) */}
      <div className="lg:hidden z-102 text-white text-2xl cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`
        fixed lg:static top-0 right-0 h-screen lg:h-auto w-full lg:w-auto 
        bg-[#0B1120] lg:bg-transparent shadow-2xl lg:shadow-none
        flex flex-col lg:flex-row items-center justify-center lg:justify-end
        transition-transform duration-500 ease-in-out z-101
        ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
      `}>
        <ul className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 list-none text-center">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="text-white text-[13px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase font-medium">HOME</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="text-white text-[13px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase font-medium">ABOUT</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-white text-[13px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase font-medium">PROJECTS</a></li>
          
          {variant === "home" && (
            <>
              <li><a href="#expertise" onClick={() => setIsOpen(false)} className="text-white text-[13px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase font-medium">EXPERTISE</a></li>
              <li><a href="#consultation" onClick={() => setIsOpen(false)} className="text-white text-[13px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase font-medium">CONSULTATION</a></li>
            </>
          )}

          <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-white text-[13px] tracking-[0.2em] hover:text-blue-400 transition-colors uppercase font-medium">CONTACT</a></li>
        
          {/* Social Media khusus di dalam Hamburger (Mobile/Tablet) */}
          <li className="flex lg:hidden items-center space-x-6 pt-10 border-t border-white/10 w-48 justify-center text-white">
            <a href="#" className="hover:text-blue-400 transition-all text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition-all text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400 transition-all text-xl"><FaDribbble /></a>
            <a href="#" className="hover:text-gray-400 transition-all text-xl"><FaMediumM /></a>
          </li>
        </ul>
      </div>

      {/* Social Media Desktop - Hanya muncul di LG (Laptop/Desktop) */}
      <div className="hidden lg:flex items-center space-x-5 text-white">
        <a href="#" className="hover:text-blue-400 transition-all text-xl"><FaTwitter /></a>
        <a href="#" className="hover:text-pink-500 transition-all text-xl"><FaInstagram /></a>
        <a href="#" className="hover:text-orange-400 transition-all text-xl"><FaDribbble /></a>
        <a href="#" className="hover:text-gray-400 transition-all text-xl"><FaMediumM /></a>
      </div>
    </nav>
  );
};

export default Navbar;