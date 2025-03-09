import Image from "next/image";

interface AttractionCardProps {
    name: string;
    image: string;
}

export default function AttractionCard({ name, image }: AttractionCardProps) {
    return (
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            {/* Image */}
            <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <h2 className="text-white text-lg font-bold text-center px-4">{name}</h2>
            </div>
        </div>
    );
}
