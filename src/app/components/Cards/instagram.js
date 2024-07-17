import React from "react";
import { instagram } from "@/coconut-oil";

const Instagram = () => {
    console.log("instagram", instagram);

    return (
        <>

            <div className="container mx-auto px-4 my-8">
                <h1 className='font-cormorant text-[#593B1F] font-normal sm:text-3xl text-center mb-6 italic text-xl'>
                    BE PART OF OUR INSTAGRAM FAMILY
                </h1>

                <div className="flex flex-wrap justify-center gap-4 ">
                    {instagram[0].images.map((image, index) => (
                        <><a href={image.link}>
                            <div key={index} className="w-full sm:w-auto border border-[#D1B87A]">
                                <img

                                    src={image.image}
                                    alt={`Instagram image ${index + 1}`}
                                    className="w-full sm:w-64 h-64 object-cover rounded-lg shadow-md p-2" />
                            </div>
                        </a></>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Instagram;
