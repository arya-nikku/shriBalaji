"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-blue-50 rounded-lg shadow-md p-4">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`w-full flex justify-between items-center text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${isOpen ? "bg-yellow-400 text-white" : "bg-blue-100 text-gray-800"}`}
            >
                {question}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isOpen && (
                <div className="px-4 py-3 text-gray-700 bg-gray-100 mt-2 rounded-lg">
                    {answer}
                </div>
            )}
        </div>
    );
}
