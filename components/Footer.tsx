import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start">
                        <Image src="/images/logo3.png" alt="Shri Balaji Logo" width={150} height={80} />
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Social</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <FaFacebookF /> Facebook
                            </li>
                            <li className="flex items-center gap-2">
                                <FaInstagram /> Instagram
                            </li>
                            <li className="flex items-center gap-2">
                                <FaTwitter /> Twitter
                            </li>
                            <li className="flex items-center gap-2">
                                <FaYoutube /> YouTube
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-500">About</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +91 94111 84381
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> hello@shribalajitaxiservices.com
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt /> 
                                <span>
                                    93V8+2P, Jamoliwala, Bhagwant Pur, <br /> Dehradun, Guniyal Gaon, Uttarakhand 248014
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 my-6" />

                {/* Copyright Section */}
                <p className="text-center text-gray-400">
                    Copyright © {new Date().getFullYear()} Shri Balaji Taxi Services. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
