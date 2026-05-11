import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import ImageLoader from './ImageLoader';

export default function TeamCard({ name, role, desc, image, socials, isLarge = false }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group">
            <div className={`relative w-full overflow-hidden bg-gray-100 ${isLarge ? 'aspect-4/5 h-65' : 'aspect-square h-60'}`}>
                <ImageLoader 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className={`p-5 flex flex-col grow ${isLarge ? 'lg:p-6' : 'p-5'}`}>
                <div className="mb-4">
                    <h4 className={`font-bold text-[#0B1120] leading-tight transition-all ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                        {name}
                    </h4>
                    <p className="text-blue-600 text-xs font-bold mt-1 uppercase tracking-widest">
                        {role}
                    </p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 grow line-clamp-3">
                    {desc}
                </p>
                <div className="flex items-center space-x-4 text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                    {socials?.github && (
                        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                            <FaGithub size={18} />
                        </a>
                    )}
                    {socials?.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                            <FaLinkedinIn size={18} />
                        </a>
                    )}
                    {socials?.ig && (
                        <a href={`https://www.instagram.com/${socials.ig}/`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                            <FaInstagram size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}