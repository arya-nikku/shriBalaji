"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/images/Company-Garden-Mussoorie.jpg",
    "/images/Mall-Road-Mussoorie.jpg",
    "/images/landour-Mussoorie.jpg",
    "/images/lal-tibba-scenic-point-mussoorie.jpg",
    "/images/Happy-Valley-Mussoorie.jpg",
    "/images/gun-hill-mussoorie.jpg",
    "/images/george-everest-mussoorie.jpg",
    "/images/Dalai-Hills-Mussoorie.jpg",
    "/images/Cloud-End-Mussoorie.jpg",
    "/images/camel-back-road-mussoorie.jpg",
    "/images/Bhatta-falls.jpg",
    "/images/benog-wildlife-sanctuary.jpg",
];

export default function AboutUsSection() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-yellow-500 font-bold uppercase text-sm">About Us</p>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2">
                        Experience Seamless and <br /> Reliable Transportation
                    </h1>
                    <p className="text-gray-700 mt-4">
                        Nestled in the picturesque surroundings of Guniyal Gaon, just a short distance from the well-known
                        Dehradun Zoo, <span className="font-bold">Shri Balaji Taxi Services</span> has become the preferred choice for reliable and trusted 
                        transportation in the Mussoorie region. Our prime location allows us to serve both locals and tourists, 
                        offering a gateway to the beauty and charm of this stunning hill station. With a deep understanding of 
                        the local terrain and a commitment to excellence, we provide top-notch taxi services that make 
                        exploring Mussoorie a breeze. Whether you’re a daily commuter familiar with the winding roads or a 
                        first-time visitor eager to discover the region’s hidden gems, we’re here to ensure that every ride 
                        is comfortable and hassle-free.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Our primary goal is to offer a seamless travel experience for every customer, no matter the 
                        destination or occasion. From prompt pick-ups to smooth journeys through the scenic mountain 
                        paths, we focus on every detail to provide a ride that stands out for its quality and reliability. 
                        Safety is at the core of our operations, and we go the extra mile to ensure that every journey is 
                        not only efficient but also secure. We understand that your time is valuable, which is why we 
                        pride ourselves on punctuality and professionalism. At Shri Balaji Taxi Services, your satisfaction 
                        is our top priority, and we are dedicated to delivering taxi services that exceed expectations, 
                        offering the perfect blend of convenience, comfort, and peace of mind.
                    </p>
                </div>

                <div className="relative w-full h-[700px] rounded-lg overflow-hidden">
                    <Image
                        key={currentImage}
                        src={images[currentImage]}
                        alt="Mussoorie Landscape"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-opacity duration-1000 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
}
