"use client";

import React, {useRef} from "react";
import {useState} from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="bg-white flex justify-around items-center shadow-md sticky top-0 z-50">
            <div className="">
                <a
                    href=""
                    className="flex bg-white items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/images/logo7.png"
                        className=""
                        alt="Shri Balaji logo"
                    />
                </a>
            </div>
            <div className="hidden lg:block forDesktopscreen">
                <ul className="flex space-x-12 pl-[100px] text-black items-center">
                    <li className="">
                        <a href="/" className="hover:text-blue-700">
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a href="about-us" className="hover:text-blue-700">
                            About us
                        </a>
                    </li>
                    <li className="relative">
                        <button
                            className="flex items-center hover:text-blue-700"
                            onClick={toggleDropdown}
                        >
                            Services
                            <svg
                                className="w-2.5 h-2.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-gray-200 border border-gray-600 rounded shadow-md w-[300px]">
                                <ul className="flex flex-col p-2 space-y-2">
                                    <li className="p-2 hover:text-blue-700">
                                        <a href="" className="">
                                            Dehradun to Mussoorie Taxi Service
                                        </a>
                                    </li>
                                    <li className="p-2 hover:text-blue-700">
                                        <a href="" className="">
                                            Haridwar To Mussoorie Taxi Service
                                        </a>
                                    </li>
                                    <li className="p-2 hover:text-blue-700">
                                        <a href="" className="">
                                            Rishikesh To Mussoorie Taxi Service
                                        </a>
                                    </li>
                                    <li className="p-2 hover:text-blue-700">
                                        <a href="" className="">
                                            Roorkee To Mussoorie Taxi Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="">
                        <a href="dehradun" className="hover:text-blue-700">
                            Dehradun
                        </a>
                    </li>
                    <li className="">
                        <a href="blog" className="hover:text-blue-700">
                            Blog
                        </a>
                    </li>
                    <li className="">
                        <a href="contact-us" className="hover:text-blue-700">
                            Contact Us
                        </a>
                    </li>
                    <li className="flex items-center space-x-2 text-blue-700 font-semibold">
                        <a
                            href="tel:+919411184381"
                            className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 rounded-lg text-black font-semibold hover:bg-yellow-500 transition duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10l1.293 1.293A1 1 0 015 12h14a1 1 0 01.707.293L21 10m-2 4v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16 4h.01M6 18h.01M9 18h6"
                                />
                            </svg>
                            <span>+91-9411184381</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="block lg:hidden bg-gray-200 forPadAndMobileScreen">
                <button
                    className="text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute top-14 left-0 w-full bg-white shadow-md">
                        <ul className="flex flex-col space-y-4 p-4">
                            <li>
                                <a href="/" className="hover:text-blue-700">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="about-us"
                                    className="hover:text-blue-700"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="">
                                <button
                                    className="flex items-center hover:text-blue-700"
                                    onClick={toggleDropdown}
                                >
                                    Services
                                    <svg
                                        className="w-2.5 h-2.5 ml-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="left-0 mt-2 bg-gray-200 border border-gray-600 rounded shadow-md">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li className="p-2 hover:text-blue-700">
                                                <a href="" className="">
                                                    Dehradun to Mussoorie Taxi
                                                    Service
                                                </a>
                                            </li>
                                            <li className="p-2 hover:text-blue-700">
                                                <a href="" className="">
                                                    Haridwar To Mussoorie Taxi
                                                    Service
                                                </a>
                                            </li>
                                            <li className="p-2 hover:text-blue-700">
                                                <a href="" className="">
                                                    Rishikesh To Mussoorie Taxi
                                                    Service
                                                </a>
                                            </li>
                                            <li className="p-2 hover:text-blue-700">
                                                <a href="" className="">
                                                    Roorkee To Mussoorie Taxi
                                                    Service
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a
                                    href="dehradun"
                                    className="hover:text-blue-700"
                                >
                                    Dehradun
                                </a>
                            </li>
                            <li>
                                <a href="blog" className="hover:text-blue-700">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="contact-us"
                                    className="hover:text-blue-700"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 text-blue-700 font-semibold">
                                <a
                                    href="tel:+919411184381"
                                    className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 rounded-lg text-black font-semibold hover:bg-yellow-500 transition duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 10l1.293 1.293A1 1 0 015 12h14a1 1 0 01.707.293L21 10m-2 4v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16 4h.01M6 18h.01M9 18h6"
                                        />
                                    </svg>
                                    <span>+91-9411184381</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
