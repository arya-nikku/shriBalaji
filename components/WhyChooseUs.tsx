import Image from "next/image";
import TextCardWithSymbol from "./TextCardWithSymbol";
import { FaCar, FaRupeeSign, FaHeadset, FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
    const serviceFeatures = [
        {
            title: "Extensive Fleet Selection",
            description: "We offer a diverse range of vehicles, from comfortable sedans to spacious SUVs, ensuring the perfect ride for every occasion.",
            icon: <FaCar className="text-blue-500 text-3xl" />,
        },
        {
            title: "Affordable Pricing",
            description: "Our clear and upfront pricing guarantees excellent value with no hidden surprises. Enjoy competitive rates without compromising quality.",
            icon: <FaRupeeSign className="text-green-500 text-3xl" />,
        },
        {
            title: "Exceptional Customer Service",
            description: "Our friendly and professional team is dedicated to assisting you. We're here to answer your questions and provide guidance for a smooth journey.",
            icon: <FaHeadset className="text-purple-500 text-3xl" />,
        },
        {
            title: "24/7 Roadside Assistance",
            description: "Your safety is our commitment. With round-the-clock roadside assistance, you can travel with peace of mind, knowing we’re there when you need us.",
            icon: <FaClock className="text-yellow-500 text-3xl" />,
        },
        {
            title: "Easy and Fast Booking",
            description: "Our hassle-free booking system allows you to reserve your ride quickly and effortlessly, making your travel plans seamless.",
            icon: <FaCheckCircle className="text-teal-500 text-3xl" />,
        },
        {
            title: "Convenient Locations",
            description: "We offer multiple convenient pickup and drop-off points, including key travel hubs, to ensure maximum convenience for our customers.",
            icon: <FaMapMarkerAlt className="text-red-500 text-3xl" />,
        },
    ];
    return (
        <div className=" container mx-auto px-6 py-12">
            <h1 className="text-center text-4xl font-bold text-gray-900">Why Choose Us?</h1>
            <p className="text-center text-gray-700 mt-3 max-w-2xl mx-auto">
                At Shri Balaji Taxi Services, we prioritize understanding your specific needs from the moment you reach out. 
                Here’s what makes us your top choice:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 items-center">
                <div className="relative">
                    <Image 
                        src="/images/2024-11-Book-Our-Taxi-Service-with-Confidence.jpg" 
                        alt="Taxi Service" 
                        width={580} 
                        height={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {serviceFeatures.map((feature, index) => (
                        <TextCardWithSymbol 
                            key={index} 
                            title={feature.title} 
                            description={feature.description} 
                            icon={feature.icon} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}




// import Image from "next/image";

// export default function WhyChooseUs() {
//     return (
//         <div className="border-2 border-black text-black p-6">
//             <h1 className="text-center font-bold text-green-800 py-2 text-4xl">
//                 Why Choose Us?
//             </h1>
//             <p className="text-center font-bold text-gray-900 mb-10">
//                 At Shri Balaji Taxi Services, we prioritize understanding your
//                 specific needs from the moment you reach out. Here’s what makes
//                 us your top choice:
//             </p>
//             <div className="border-2 border-red">
//                 <div className="border-2 border-yellow-300">
//                     <Image 
//                         src="/images/Dehradun-to-Mussoorie-outstation-taxi-service-1.jpg" 
//                         alt="Your Image" 
//                         width={580} 
//                         height={448}
//                         objectFit="cover"
//                         className="rounded-lg"
//                         />
//                 </div>
//                 <div className="border-2 border-black"></div>
//             </div>
//         </div>
//     );
// }
