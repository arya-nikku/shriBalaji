// import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
    { question: "What is the Best Way to Book a Taxi in Mussoorie?", answer: "The best way to book a taxi in Mussoorie is through online platforms that offer easy booking, affordable rates, and vehicle choices. Choose pick-up and drop-off locations based on your convenience." },
    { question: "Can I Get a Luxury Car Rental in Mussoorie?", answer: "Yes, luxury car rentals are available in Mussoorie. You can book premium vehicles for a more comfortable and stylish travel experience." },
    { question: "Can I Book a One-Way Taxi from Mussoorie to Delhi?", answer: "Absolutely! One-way taxi services are available from Mussoorie to Delhi with affordable pricing." },
    { question: "How Do I Choose the Best Taxi Service in Mussoorie?", answer: "Look for online reviews, pricing transparency, and customer support availability when selecting a taxi service in Mussoorie." },
    { question: "How Much Does a Taxi Cost from Dehradun to Mussoorie?", answer: "Taxi fares vary based on vehicle type and availability, but the average cost is around ₹1200 - ₹2000." },
    { question: "What Are the Benefits of Booking a Taxi Online in Mussoorie?", answer: "Online taxi bookings offer convenience, better pricing, and vehicle availability compared to offline bookings." },
    { question: "What Types of Vehicles are Available for Car Rentals in Mussoorie?", answer: "You can choose from hatchbacks, sedans, SUVs, and luxury cars based on your preference and budget." },
    { question: "Do Mussoorie Taxi Services Provide 24/7 Availability?", answer: "Yes, many taxi services operate 24/7 to accommodate late-night and early-morning travel needs." },
    { question: "Do Mussoorie Taxi Services Offer Airport Pick-Up and Drop-Off?", answer: "Yes, Mussoorie taxi services provide convenient airport pick-up and drop-off options, allowing you to start your trip with ease"},
    { question: "Can I Hire a Taxi in Mussoorie for Local Sightseeing?", answer: "Absolutely! You can hire a taxi in Mussoorie for local sightseeing, including popular attractions like Kempty Falls, Gun Hill, and Mall Road."},
    { question: "Are Mussoorie Taxi Services Available for Outstation Trips?", answer: "Many taxi services in Mussoorie offer outstation trips to destinations like Rishikesh, Haridwar, or Delhi. You can book these online for a hassle-free journey."},
    { question: "What Are the Payment Options for Booking a Taxi in Mussoorie?", answer: "Most Mussoorie taxi services accept multiple payment options, including cash, credit/debit cards, and online wallets, providing flexibility for customers."},
    { question: "What Safety Measures Do Taxi Services in Mussoorie Follow?", answer: "Taxi services in Mussoorie prioritize safety by offering well-maintained, sanitized vehicles and professionally trained drivers familiar with local routes."},
    { question: "How Do I Cancel or Modify My Taxi Booking in Mussoorie?", answer: "You can easily cancel or modify your booking through the service provider's website or app. Some services may have a cancellation policy, so check terms before booking."},
];

export default function QnASection() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Most Popular Questions</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}
