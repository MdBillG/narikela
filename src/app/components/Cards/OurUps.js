import React from "react";
import IconButton from "../buttons.js/iconButton";

export default function OurUps() {
    return (
        <div>
            <h1 className="p-2 mx-7 xl:mx-[40px] sm:mx-[190px] font-semibold">Our Usps( but the heading wont be there)</h1>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 mx-10  sm:mx-20 md:mx-20 my-8">


                {[1, 2, 3, 4, 5, 6].map((num) => (

                    <div key={num} className="relative">
                        <div>
                            <img
                                className="w-1/3 h-25 object-cover sm:rounded-xl rounded-md md:mx-14 mx-8 sm:mx-16 lg:mx-20 xl:mx-24"
                                src={`/image/4cards/image${num}.jpeg`}
                                alt={`Card ${num}`}
                            />
                        </div>

                        <p className="text-xs md:mx-1    lg:mx-1 m-1">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
