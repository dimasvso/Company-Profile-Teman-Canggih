import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TeamCard({ name, role, desc, image, socials, isLarge = false }) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group">
            <div className={`bg-[#E5F3FF] w-full flex items-center justify-center transition-all overflow-hidden ${isLarge ? 'h-64 lg:h-80' : 'h-56'}`}>
                {image ? (
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                ) : (
                    <div className="text-blue-200 text-6xl">👤</div>
                )}
            </div>

            <div className={`p-6 flex flex-col grow transition-all ${isLarge ? 'lg:p-10' : 'p-6'}`}>
                <h4 className={`font-bold mb-2 text-[#0B1120] transition-all ${isLarge ? 'text-xl lg:text-3xl' : 'text-xl'}`}>
                    {name}
                </h4>
                <p className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wider">
                    {role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                    {desc}
                </p>
                
                <div className="flex items-center space-x-4 text-gray-400">
                    {socials?.github && (
                        <a href={socials.github} className="hover:text-black transition-colors"><FaGithub size={16} /></a>
                    )}
                    {socials?.linkedin && (
                        <a href={socials.linkedin} className="hover:text-blue-700 transition-colors"><FaLinkedinIn size={16} /></a>
                    )}
                    {socials?.twitter && (
                        <a href={socials.twitter} className="hover:text-blue-400 transition-colors"><FaTwitter size={16} /></a>
                    )}
                    {socials?.dribbble && (
                        <a href={socials.dribbble} className="hover:text-pink-500 transition-colors"><FaDribbble size={16} /></a>
                    )}
                    {socials?.ig && (
                        <a href={socials.ig} className="hover:text-pink-600 transition-colors"><FaInstagram size={16} /></a>
                    )}
                    {socials?.fb && (
                        <a href={socials.fb} className="hover:text-blue-600 transition-colors"><FaFacebookF size={16} /></a>
                    )}
                </div>
            </div>
        </div>
    );
}