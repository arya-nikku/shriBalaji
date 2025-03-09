import Image from "next/image";
import { FaRupeeSign, FaSnowflake, FaCog } from "react-icons/fa";

interface VehicleCardProps {
    name: string;
    image: string;
    seats: string;
    transmission: string;
    ac: boolean;
}

export default function VehicleCard({ name, image, seats, transmission, ac }: VehicleCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

            <div className="relative w-full h-40 my-4">
                <Image src={image} alt={name} layout="fill" objectFit="contain" />
            </div>

            <div className="flex justify-center gap-4 text-gray-600 text-sm my-3">
                <span>{seats} Seats</span>
                <span className="flex items-center gap-1"><FaCog /> {transmission}</span>
                {ac && <span className="flex items-center gap-1"><FaSnowflake /> Air Conditioner</span>}
            </div>

            <div className="flex items-center justify-between w-full mt-4 border-t pt-4">
                <div className="flex items-center text-yellow-500 font-medium">
                    <FaRupeeSign className="text-xl" />
                    <span>Best Price Available</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Book Now
                </button>
            </div>
        </div>
    );
}
