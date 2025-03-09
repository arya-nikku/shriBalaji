import VehicleCard from "./VehicleCard";

const vehicles = [
    { name: "Hyundai Accent", image: "/images/2024-11-hyundai-1-768x768.png", seats: "4+1", transmission: "Manual", ac: true },
    { name: "Swift Dzire", image: "/images/2024-11-Swift-dzire.png", seats: "4+1", transmission: "Manual", ac: true },
    { name: "Toyota Etios", image: "/images/2024-11-toyota-etios.png", seats: "4+1", transmission: "Manual", ac: true },
    { name: "Maruti Ertiga", image: "/images/2024-11-Maruti-Ertiga.png", seats: "6+1", transmission: "Manual", ac: true },
    { name: "Innova Crysta", image: "/images/2024-11-innova-crysta.png", seats: "7+1", transmission: "Manual", ac: true },
    { name: "Innova", image: "/images/2024-11-innova-2.png", seats: "7+1", transmission: "Manual", ac: true },
];

export default function VehicleSection() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">
                    Choose Your Ideal Vehicle from Our Extensive Fleet
                </h1>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {vehicles.map((vehicle, index) => (
                        <VehicleCard 
                            key={index} 
                            name={vehicle.name} 
                            image={vehicle.image} 
                            seats={vehicle.seats} 
                            transmission={vehicle.transmission} 
                            ac={vehicle.ac} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
