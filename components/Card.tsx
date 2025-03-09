import Image from "next/image";

interface CardProps {
    title: string;
    image: string;
    description: string;
}

export default function Card({title, image, description}: CardProps) {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-4">
            <div className="relative w-full h-48">
                <Image
                    src={image} 
                    alt={title} 
                    width={360}
                    height={227}
                    className="rounded-lg object-contain"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">{description}</p>
            <div className="flex justify-between mt-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-full transition">
                    Learn More
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-full transition">
                    Call Now
                </button>
            </div>
        </div>
    );
}
