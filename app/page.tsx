import Numbers from "@/components/Numbers";

export default function Home() {
    return (
        <div>
            <div
                className="relative bg-cover bg-center text-white h-screen border-x-2 border-black"
                style={{
                    backgroundImage: `url('/images/istockphoto-1047693400-1024x1024.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <h1 className="text-5xl font-bold mb-6 text-center">
                        SERVICES ACROSS UTTARAKHAND
                    </h1>
                    <div className="bg-white text-black p-6 rounded-xl shadow-lg mt-4 w-full max-w-4xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="from"
                                    className="block text-sm font-semibold mb-1"
                                >
                                    FROM
                                </label>
                                <input
                                    type="text"
                                    id="from"
                                    placeholder="Enter Pickup City"
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="to"
                                    className="block text-sm font-semibold mb-1"
                                >
                                    TO
                                </label>
                                <input
                                    type="text"
                                    id="to"
                                    placeholder="Enter Drop City"
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="pickup"
                                    className="block text-sm font-semibold mb-1"
                                >
                                    PICK UP
                                </label>
                                <input
                                    type="date"
                                    id="pickup"
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="pickupTime"
                                    className="block text-sm font-semibold mb-1"
                                >
                                    PICK UP AT
                                </label>
                                <input
                                    type="time"
                                    id="pickupTime"
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-bold text-lg mt-6 w-full shadow-md">
                            EXPLORE CABS
                        </button>
                    </div>
                </div>
            </div>
            <Numbers />
        </div>
    );
}
