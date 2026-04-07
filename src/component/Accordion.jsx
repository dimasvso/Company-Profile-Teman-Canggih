import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import clsx from "clsx";

export default function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={clsx("w-full transition-all duration-300 border-l-4 mb-4 rounded-r-xl shadow-sm",
            isOpen ? "border-blue-400 bg-blue-50/30" : "border-transparent bg-white")}>
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 cursor-pointer text-left">
                <span className={clsx("font-bold text-lg md:text-xl transition-colors", isOpen ? "text-blue-600" : "text-[#0B1120]")}>
                    {question}
                </span>
                <span className={isOpen ? "text-blue-600" : "text-gray-400"}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>
            <div className={clsx("overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                <p className="px-6 pb-6 text-gray-500 leading-relaxed text-base md:text-lg">
                    {answer}
                </p>
            </div>
        </div>
    );
}