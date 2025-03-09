import AttractionCard from "./AttractionCard";

const attractions = [
    { name: "Company Garden", image: "/images/Company-Garden-Mussoorie.jpg" },
    { name: "Mall Road Mussoorie", image: "/images/Mall-Road-Mussoorie.jpg" },
    { name: "Landour Mussoorie", image: "/images/landour-Mussoorie.jpg" },
    { name: "Lat Tibba Scenic Point Mussoorie", image: "/images/lal-tibba-scenic-point-mussoorie.jpg" },
    { name: "Happy Valley Mussoorie", image: "/images/Happy-Valley-Mussoorie.jpg" },
    { name: "Gun Hill Mussoorie", image: "/images/gun-hill-mussoorie.jpg" },
    { name: "George Everest Mussoorie", image: "/images/george-everest-mussoorie.jpg" },
    { name: "Dalai Hills Mussoorie", image: "/images/Dalai-Hills-Mussoorie.jpg" },
    { name: "Cloud End Mussoorie", image: "/images/Cloud-End-Mussoorie.jpg" },
    { name: "Camel Back Road Mussoorie", image: "/images/camel-back-road-mussoorie.jpg" },
    { name: "Bhatta Falls", image: "/images/Bhatta-falls.jpg" },
    { name: "Benog Wildlife Sanctuary", image: "/images/benog-wildlife-sanctuary.jpg" },
];

export default function TouristAttractions() {
    return (
        <div className="bg-yellow-400 py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">Tourist Attractions In Mussoorie</h1>
                <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                    Explore the stunning beauty of Mussoorie. Discover popular tourist spots, enjoy competitive rental rates, and travel in comfort.
                </p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {attractions.map((attraction, index) => (
                        <AttractionCard key={index} name={attraction.name} image={attraction.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}
