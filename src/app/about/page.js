'use client'
import React, { useEffect, useState } from "react";

const About = () => {
    const [count, setCount] = useState(0)
    const target = 250
    const incrementSpeed = 30

    useEffect(() => {
        if (count < target) {
            const timer = setTimeout(() => {
                setCount(count + 1)
            }, incrementSpeed)
            return () => clearTimeout(timer)
        }
    }, [count])

    return (
        <>
            <div className="relative">
                <div className="sm:block hidden">
                    <img className="h-full" src="/image/banner/aboutusl.jpg" alt="" />
                </div>
                <div className="sm:hidden block ">
                    <img className="h-full" src="/image/banner/aboutusm.jpg" alt="" />
                </div>

                <div className="absolute bottom-[4%] left-[28%] sm:left-[500px]  sm:text-center my-auto bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl p-2 sm:p-4 flex flex-col justify-center items-center sm:w-[25%] font-cormorant">
                    <p className="text-xs sm:text-xl text-[#F3EEE1] whitespace-nowrap ">
                        Experience The Natural Goodness
                    </p>
                    <div className="text-xs sm:text-xl text-[#D1B87A] flex flex-wrap justify-center items-center">
                        <a href="/" className="mr-1 whitespace-nowrap">
                            Home
                        </a>
                        <img
                            className="h-3 sm:h-6 mx-1"
                            src="/image/blogs/blogline.png"
                            alt=""
                            width={3}
                            height={24}
                        />
                        <a href="/blogs" className="mx-1 whitespace-nowrap">
                            Blogs
                        </a>
                    </div>
                </div>
            </div>
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
                <div className="sm:my-5 mt-5 mx-4  sm:text-start text-center">
                    <h1 className="text-[#593B1F] font-cormorant italic text-2xl ">
                        ABOUT US
                    </h1>
                    <h3 className="text-[#1B2F1F] font-cormorant font-medium text-2xl tracking-wide">
                        Generations of Purity
                    </h3>
                    <p className="text-[#000000 ] font-poppins font-medium sm:text-sm text-xs mt-3">
                        At Narikela, Nestled In The Lush Greenery of Tiptur, Our Family
                        Heritage of Coconut Cultivation Dates Back To 1954. Our Legacy Is
                        Built On Excellence And trust, Passed Down Through Generations. We
                        Are Expanding Beyond Copra To Offer Coconut-Based Products,
                        Celebrating The Coconut's Versatility. Our Philosophy Supports Local
                        Farmers with Fair And Sustainable Practices. Each Sun-Ripened
                        Coconut Is Handpicked And Cold-Pressed To Preserve Its Natural
                        Richness, Ensuring The Highest Quality Coconut Oil
                    </p>

                    <div className="flex sm:flex-row flex-col gap-3 font-cormorant text-[#593B1F] italic font-semibold mt-4 items-center ">
                        <div className="flex flex-row rounded-r drop-shadow-lg  border border-[#D1B87A] border-l-2 h-14 items-center justify-center w-40 border-l-[#593B1F]  animate__animated animate__backInLeft ">
                            <img className="w-10 h-7 ml-2" src="icons/since.png" alt="" />
                            <p className="sm:text-lg text-sm mr-1">Since</p>
                            <p className="sm:text-sm text-xs pt-[5px]"> 2023</p>
                        </div>

                        <div className="flex flex-row rounded-r drop-shadow-xl border border-[#D1B87A] border-l-2 items-center justify-center w-60 border-l-[#593B1F] h-12 sm:h-14 animate__animated animate__backInRight">
                            <img className="w-10 h-7 ml-2" src="icons/happy.png" alt="" />
                            <p className="sm:text-sm text-xs pt-[5px] font-semibold mr-2">
                                {count}+
                            </p>
                            <p className="sm:text-lg text-sm "> Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-[#EBEAD5] mt-5">
                <p className="text-[#593B1F] text-center sm:font-medium sm:text-3xl font-cormorant mt-5 p-2">
                    Benefits of Narikela Coconut Oil
                </p>

                <div className="flex sm:flex-row flex-col justify-center ">

                    <div className="flex sm:flex-col flex-col gap-2 items-center">
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
                            className="w-96"
                            src="image/aboutus/aboutuscoconut.png"
                            alt=""
                        />
                    </div>
                    <div className="flex sm:flex-col flex-col  gap-2 mb-2 sm:justify-center items-center">
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <p className="sm:hidden block mr-2"> Nourishes Hair </p>
                            <img
                                className=" mr-2 w-10 h-7"
                                src="icons/iconhealthy.png"
                                alt=""
                            />
                            <p className="sm:block hidden"> Nourishes Hair </p>
                        </div>
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <p className="sm:hidden block mr-2 ">Boosts Energy </p>
                            <img
                                className="w-10 h-7 mr-2 "
                                src="icons/iconstamina.png"
                                alt=""
                            />
                            <p className="sm:block hidden">Boosts Energy </p>
                        </div>
                        <div className="h-10 bg-[#F3EEE1]   rounded-2xl w-56 text-center my-auto drop-shadow-lg border border-[#D1B87A] text-[#593B1F] border-opacity-50 flex items-center justify-center font-cormorant">
                            <p className="sm:hidden block mr-2">Reduces Bad Cholesterol </p>
                            <img
                                className=" mr-2 w-10 h-7"
                                src="icons/iconsaturated.png"
                                alt=""
                            />
                            <p className="sm:block hidden">Reduces Bad Cholesterol </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 sm:w-2/3 mx-auto sm:py-4">
                <h2 className=" sm:hidden block text-[#593B1F] font-medium text-2xl italic  font-cormorant text-center my-4">
                    MEET THE VISIONARY
                </h2>
                <div>
                    <img
                        className="sm:ml-32 sm:h-72  pl-3 pr-3"
                        src="/image/founder/founder.png"
                        alt=""
                    />
                </div>

                <div className="relative sm:pl-8  font-cormorant sm:py-8">

                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#593B1F] sm:ml-4 sm:block hidden"></div>
                    <h2 className="text-[#593B1F] font-medium text-2xl italic sm:block hidden">
                        MEET THE VISIONARY
                    </h2>
                    <h1 className="sm:text-[#1B2F1F] sm:font-medium sm:text-3xl sm:mt-3 sm:text-start text-center font-medium text-xl text-[#593B1F] py-2 animate__animated animate__backInDown">
                        Kaivalya K Mithra
                    </h1>
                    <p className="sm:text-[#000000] text-sm font-poppins sm:mt-5 text-[#593B1F] sm:text-start text-center pb-2 px-2">
                        The Founder Of Narikela, Hails From Tiptur. After Pursuing Higher
                        Education In Bangalore, He Felt Inspired To Reconnect With His Roots
                        And His Family's Ancestral Coconut Business. Driven By A Passion To
                        Showcase The Richness Of His Homeland, He Returned To Tiptur And
                        Established Narikela, Celebrating The Land's Abundant Natural
                        Wealth.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
