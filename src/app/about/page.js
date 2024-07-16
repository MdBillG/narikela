import React from "react";

const About = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:mx-16 sm:my-10 mt-4 ">
                <div className="relative mx-7">
                    <img
                        className="absolute sm:-bottom-10 sm:left-3 sm:w-40  w-32 -bottom-9 -left-12 "
                        src="image/aboutus/aboutuscoconut1.png"
                        alt=""
                    />

                    <div className="">
                        <img
                            className=" sm:w-2/3 mx-auto border border-[#1B2F1F]  p-2 rounded-md border-opacity-65"
                            src="image/aboutus/aboutuscoconuttree.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="sm:my-10 mt-5 mx-4">
                    <h1 className="text-[#593B1F] font-cormorant italic text-2xl">
                        ABOUT US
                    </h1>
                    <h3 className="text-[#1B2F1F] font-cormorant font-medium text-2xl tracking-wide">
                        Generations of Purity
                    </h3>
                    <p className="text-[#000000 ] font-poppins font-medium sm:text-sm text-xs">
                        At Narikela, Nestled In The Lush Greenery of Tiptur, Our Family
                        Heritage of Coconut Cultivation Dates Back To 1954. Our Legacy Is
                        Built On Excellence And trust, Passed Down Through Generations. We
                        Are Expanding Beyond Copra To Offer Coconut-Based Products,
                        Celebrating The Coconut's Versatility. Our Philosophy Supports Local
                        Farmers with Fair And Sustainable Practices. Each Sun-Ripened
                        Coconut Is Handpicked And Cold-Pressed To Preserve Its Natural
                        Richness, Ensuring The Highest Quality Coconut Oil
                    </p>

                    <div className="flex flex-row gap-3 font-cormorant text-[#593B1F] italic font-semibold mt-4 ">
                        <div className="flex flex-row   rounded-r drop-shadow-lg  border border-[#D1B87A] border-l-2 h-14 items-center justify-center w-40 border-l-[#593B1F] ">
                            <img
                                className="w-10 h-7 ml-2"
                                src="icons/since.png"
                                alt=""
                            />
                            <p className="sm:text-lg text-sm mr-1">Since</p>{" "}
                            <p className="sm:text-sm text-xs pt-[5px]"> 2023</p>
                        </div>

                        <div className="flex flex-row    rounded-r drop-shadow-xl border border-[#D1B87A] border-l-2 items-center justify-center w-60 border-l-[#593B1F] " >
                            <img
                                className="w-10 h-7 ml-2"
                                src="icons/happy.png"
                                alt=""
                            />
                            <p className="sm:text-sm text-xs pt-[5px] font-semibold mr-2">250+</p>{" "}
                            <p className="sm:text-lg text-sm "> Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#EBEAD5] mt-5">
                <p className="text-[#593B1F] text-center font-medium font-cormorant mt-5">
                    Benefits of Narikela Coconut Oil
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3  ">
                    <div className="flex sm:flex-col flex-col gap-2 mx-auto  mt-2 sm:justify-center sm:items-center  sm:ml-36">
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <p>Moisturizes Skin</p>
                            <img
                                className="w-10 h-7 ml-2"
                                src="icons/iconskincare.png"
                                alt=""
                            />
                        </div>
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <p className="">Boosts Immunity </p>
                            <img
                                className="w-10 h-7 ml-2"
                                src="icons/iconimmunity.png"
                                alt=""
                            />
                        </div>
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <p>Improves Metabolism</p>
                            <img
                                className="w-10 h-7 ml-2"
                                src="icons/icondigestion.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="w-3/4"
                            src="image/aboutus/aboutuscoconut.png"
                            alt=""
                        />
                    </div>
                    <div className="flex sm:flex-col flex-col mx-auto gap-2 mb-2 sm:justify-center sm:items-center sm:mr-36">
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <img
                                className=" mr-2 w-10 h-7"
                                src="icons/iconhealthy.png"
                                alt=""
                            />

                            <p> Nourishes Hair </p>
                        </div>
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <img
                                className="w-10 h-7 mr-2 "
                                src="icons/iconstamina.png"
                                alt=""
                            />

                            <p>Boosts Energy </p>
                        </div>
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <img
                                className=" mr-2 w-10 h-7"
                                src="icons/iconsaturated.png"
                                alt=""
                            />

                            <p>Reduces Bad Cholesterol </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
