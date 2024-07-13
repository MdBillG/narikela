import React from "react";
import IconButton from "../buttons.js/iconButton";

export default function OurUps() {
    return (
        <div>
            <h1 className="p-2 text-center font-semibold">Our Usps( but the heading wont be there)</h1>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 mx-4 sm:mx-20 md:mx-20 my-4 ">


                {[1, 2, 3, 4, 5, 6].map((num) => (

                    <div key={num} className="relative">
                        <div>
                            {/* <img
                                className="w-1/3 h-25 object-cover sm:rounded-xl rounded-md mx-14 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 xs:mx-1"
                                src={`/image/4cards/image${num}.jpeg`}
                                alt={`Card ${num}`}
                            /> */}
                            <img
                                className="w-1/3 h-25 object-cover sm:rounded-xl rounded-md  sm:w-10 md:w-20 lg:w-30 mx-auto"
                                src={`/image/4cards/image${num}.jpeg`}
                                alt={`Card ${num}`}
                            />
                        </div>

                        <p className="text-xs text-center">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
