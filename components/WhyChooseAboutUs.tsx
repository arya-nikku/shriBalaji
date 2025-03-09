import { FaShieldAlt, FaCalendarCheck, FaHeadset } from "react-icons/fa";

const features = [
    {
        icon: <FaShieldAlt className="text-green-500 text-6xl mx-auto" />,
        title: "Best price guarantee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        icon: <FaCalendarCheck className="text-green-500 text-6xl mx-auto" />,
        title: "Easy Booking",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        icon: <FaHeadset className="text-green-500 text-6xl mx-auto" />,
        title: "Customer Service 24h",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
];

export default function WhyChooseAboutUs() {
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Why Choose Us ?</h1>
            <p className="text-gray-600 mt-2 mb-10">
                These popular destinations have a lot to offer
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        {feature.icon}
                        <h2 className="text-lg font-semibold text-gray-800 mt-4">{feature.title}</h2>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
