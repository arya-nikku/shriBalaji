import Card from "./Card"

export default function DehradunCardCollection() {
    const taxiServices = [
        {
            title: "Haridwar To Dehradun Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Enjoy a smooth and scenic ride with our Haridwar to Dehradun taxi service, ensuring comfort and convenience.",
        },
        {
            title: "Mussoorie To Dehradun Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Our Mussoorie to Dehradun taxi service offers a hassle-free journey with expert drivers and comfortable vehicles.",
        },
        {
            title: "Rishikesh To Dehradun Taxi Service",
            image: "/images/2024-11-Rishikesh-To-Mussoorie-Taxi-Service.jpg",
            description: "Travel easily from Rishikesh to Dehradun with our reliable taxi service, ensuring a safe and pleasant ride.",
        },
        {
            title: "Roorkee To Dehradun Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Our Roorkee to Dehradun taxi service provides a comfortable, well-maintained vehicle for a seamless travel experience.",
        },
        {
            title: "Saharanpur To Dehradun Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Book our Saharanpur to Dehradun taxi service for a comfortable ride with professional drivers and smooth travel experience.",
        },
        {
            title: "Selaqui To Dehradun Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "With our Selaqui to Dehradun taxi service, enjoy a convenient and stress-free journey through picturesque landscapes.",
        },
    ];
    return (
        <div className="text-black p-6">
            <h4 className="flex justify-center font-bold text-green-800 pb-2">Top Destination</h4>
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">
                Affordable Taxi Services to Dehradun from Near Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {taxiServices.map((service, index) => (
                    <Card key={index} title={service.title} image={service.image} description={service.description} />
                ))}
            </div>
        </div>
    )
}
