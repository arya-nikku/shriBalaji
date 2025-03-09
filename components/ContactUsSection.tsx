"use client"

import { useState } from "react";
import ContactForm from "./ContactForm";

const faqItems = [
    {
        title: "Booking Assistance",
        content:
            "Our team is ready to assist with your booking, ensuring a smooth and easy process. Whether it's for a solo trip or group tour, we provide all the support you need to secure the perfect ride.",
    },
    {
        title: "Vehicle Information",
        content:
            "We offer detailed information on all our vehicles, including SUVs, sedans, and Tempo Travellers. Our fleet is regularly maintained, ensuring comfort, safety, and reliability for every journey you take with us.",
    },
    {
        title: "Roadside Support",
        content:
            "Our roadside support team is available 24/7 to assist you in case of any emergencies or unexpected issues during your journey. We're committed to keeping you safe and ensuring a hassle-free experience throughout your trip.",
    },
];

export default function ContactUsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <ContactForm />

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Connecting with us is easy. Let’s create seamless communication for a global impact.
                    </p>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border-b pb-2">
                                <button
                                    className="flex justify-between w-full text-left text-lg text-black font-semibold py-2"
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    {item.title}
                                    {/* <span>{activeIndex === index ? "−" : "+"}</span> */}
                                </button>
                                {activeIndex === index && (
                                    <p className="text-gray-600 mt-2">{item.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
