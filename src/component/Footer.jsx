import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter,FaArrowRight } from 'react-icons/fa';
import FooterLogo from '../assets/footer-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-16 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Employee database</a></li>
            <li><a href="#" className="hover:text-white transition">Payroll</a></li>
            <li><a href="#" className="hover:text-white transition">Absences</a></li>
            <li><a href="#" className="hover:text-white transition">Time tracking</a></li>
            <li><a href="#" className="hover:text-white transition">Shift planner</a></li>
            <li><a href="#" className="hover:text-white transition">Recruiting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Information</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">About us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact us</a></li>
            <li><a href="#" className="hover:text-white transition">Lift Media</a></li>
          </ul>
        </div>

        <div className="p-6 rounded-xl ">
          <h4 className="font-bold mb-4">Subscribe</h4>
          <div className="flex bg-white rounded-lg overflow-hidden mb-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent text-black px-4 py-2 w-full outline-none text-sm"
            />
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-700 transition">
              <FaArrowRight />
            </button>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="bg-[#1a1a1a] p-2 rounded-lg w-24">
          <img 
            src={FooterLogo}
            alt="Logo" 
            className="w-full grayscale brightness-200" 
          />
        </div>

        <div className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-500 transition">Terms</a>
          <a href="#" className="hover:text-blue-500 transition">Privacy</a>
          <a href="#" className="hover:text-blue-500 transition">Cookies</a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;