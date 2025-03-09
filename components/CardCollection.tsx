import Card from "./Card"

export default function CardCollection() {
    const taxiServices = [
        {
            title: "Dehradun To Mussoorie Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Enjoy a smooth and scenic ride with our Dehradun to Mussoorie taxi service, ensuring comfort and convenience.",
        },
        {
            title: "Rishikesh To Mussoorie Taxi Service",
            image: "/images/2024-11-Rishikesh-To-Mussoorie-Taxi-Service.jpg",
            description: "Our Rishikesh to Mussoorie taxi service offers a hassle-free journey with expert drivers and comfortable vehicles.",
        },
        {
            title: "Roorkee To Mussoorie Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Travel easily from Roorkee to Mussoorie with our reliable taxi service, ensuring a safe and pleasant ride.",
        },
        {
            title: "Haridwar To Mussoorie Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Our Haridwar to Mussoorie taxi service provides a comfortable, well-maintained vehicle for a seamless travel experience.",
        },
        {
            title: "Delhi To Mussoorie Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "Book our Delhi to Mussoorie taxi service for a comfortable ride with professional drivers and smooth travel experience.",
        },
        {
            title: "Gurgaon To Mussoorie Taxi Service",
            image: "/images/2024-11-Dehradun-To-Mussoorie-Taxi-Service.jpg",
            description: "With our Gurgaon to Mussoorie taxi service, enjoy a convenient and stress-free journey through picturesque landscapes.",
        },
    ];
    return (
        <div className="text-black p-6">
            <h4 className="flex justify-center font-bold text-green-800 pb-2">Top Destination</h4>
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">
                Affordable Taxi Services to Mussoorie from Major Cities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {taxiServices.map((service, index) => (
                    <Card key={index} title={service.title} image={service.image} description={service.description} />
                ))}
            </div>
        </div>
    )
}
