import React from "react";

export default function Blogs() {
    return (
        <div>
            <h1>Our Blogs</h1>
            <hr />
            <div className="flex flex-col  sm:flex-row">
                <div>
                    <p className="mx-36 sm:mx-14 md:mx-32 lg:mx-36 my-2 sm:my-14">
                        blog1 heading
                    </p>
                    <img
                        className="sm:w-1/4  w-1/2 mx-24 sm:h-32 object-cover rounded-xl my-2"
                        src={`/image/4cards/image2.jpeg`}
                        alt={`Card`}
                    />
                    <h1 className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                    </h1>
                </div>
                <hr />
                <div>
                    <p className="mx-36 sm:mx-14 md:mx-32 lg:mx-36 my-2 sm:my-14">
                        blog1 heading
                    </p>
                    <img
                        className="sm:w-1/4  w-1/2 mx-24 sm:h-32 object-cover rounded-xl my-2"
                        src={`/image/4cards/image2.jpeg`}
                        alt={`Card`}
                    />
                    <h1 className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                    </h1>
                </div>
                <hr />
                <div>
                    <p className="mx-36 sm:mx-14 md:mx-32 lg:mx-36 my-2 sm:my-14">
                        blog1 heading
                    </p>
                    <img
                        className="sm:w-1/4  w-1/2 mx-24 sm:h-32 object-cover rounded-xl my-2"
                        src={`/image/4cards/image2.jpeg`}
                        alt={`Card`}
                    />
                    <h1 className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                    </h1>
                </div>
            </div>
        </div>
    );
}
