import Image from "next/image";

export default function Numbers() {
    return (
        <div>
            <div className="flex text-black mx-[50px] mt-6 justify-center gap-[20px] py-4">
                <div className="h-[448px] w-[580px]">
                <Image 
                    src="/images/Dehradun-to-Mussoorie-outstation-taxi-service-1.jpg" 
                    alt="Your Image" 
                    width={580} 
                    height={448}
                    objectFit="cover"
                    className="rounded-lg"
                    />
                </div>
                <div className="h-[448px] w-[580px]">
                    <div className="p-[8px] flex flex-col justify-center gap-4">
                        <h1 className="font-bold tracking-tighter text-green-800">Travelers point</h1>
                        <div className="font-bold text-2xl">We help to explore your dream place</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus porro cumque error voluptatem facere sit rem dolore eos laudantium voluptas, reiciendis ullam odit nihil delectus vel. Quasi, sed sequi.</p>
                    </div>
                    <div className="grid grid-cols-2 mt-[20px] gap-6 p-[10px] h-[164px]">
                        <div className="py-[2px]">
                            <div className="font-bold text-4xl text-green-800 ">20+</div>
                            <div>City Tour</div>
                        </div>
                        <div className="py-[2px]">
                            <div className="font-bold text-4xl text-green-800">20+</div>
                            <div>Cars with different sizes</div>
                        </div>
                        <div className="py-[2px]">
                            <div className="font-bold text-4xl text-green-800">400+</div>
                            <div>Rides</div>
                        </div>
                        <div className="py-[2px]">
                            <div className="font-bold text-4xl text-green-800">30+</div>
                            <div>Hotels</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}
