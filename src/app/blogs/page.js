'use client'
import React from "react";
import { usePathname } from "next/navigation";

const page = () => {

    const pathname = usePathname()

    console.log("pathname", pathname)


    return (

        <div>

            <div className="relative">
                <div>
                    <img className="h-full" src="/image/blogs/blogbanner.png" alt="" />
                </div>

                <div className="absolute bottom-4 left-24 sm:left-[500px] sm:bottom-24 sm:text-center my-auto bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl h-12 w-56 flex flex-col justify-center items-center sm:h-24 sm:w-72">
                    <p className="text-xs sm:text-xl text-[#F3EEE1]">
                        Experience The Natural Goodness
                    </p>
                    <span className="text-xs sm:text-xl text-[#D1B87A] flex">
                        {" "}
                        <a href="" className="mr-1">
                            {" "}
                            Home
                        </a>{" "}
                        <img
                            className="h-3 sm:h-6 mt-[2px]"
                            src="/image/blogs/blogline.png"
                            alt=""
                        />
                        <a href="" className="ml-1">
                            {" "}
                            Blogs
                        </a>
                    </span>
                </div>
            </div>

            <div className="my-12">

                <div className="flex sm:flex-row  flex-col sm:justify-center sm:w-2/3 sm:mx-auto font-cormorant sm:space-x-7 mx-2">
                    <div className="relative sm:block hidden  ">
                        <img
                            className=" sm:w-72 h-full rounded-sm"
                            src="/image/blogs/blogmonday.png"
                            alt="sdddddddd"
                        />
                        <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10 mx-2  w-40">

                            <p className="ml-2 ">21/10/2023</p>
                            <img
                                className="h-6  mt-[1px] ml-3 rounded-sm"
                                src="/image/blogs/blogline.png "
                                alt=""
                            />
                            <p className="ml-3">Sunday</p>
                        </span>
                    </div >
                    <div className="sm:w-1/2 sm:text-end text-center mt-2">
                        <p className="text-[#593B1F] font-medium text-lg italic">
                            BLOG HEADING
                        </p>
                        <p className="text-[#593B1F]">Blog Sub Heading</p>
                        <p className="text-[#593B1F] ">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
                            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
                            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
                            Pariatur.
                        </p>
                    </div>

                    <div className="relative sm:hidden block  ">
                        <img
                            className=" sm:w-72 h-full rounded-sm"
                            src="/image/blogs/blogmonday.png"
                            alt="sdddddddd"
                        />
                        <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10 mx-2  w-40">

                            <p className="ml-2 ">21/10/2023</p>
                            <img
                                className="h-6  mt-[1px] ml-3 rounded-sm"
                                src="/image/blogs/blogline.png "
                                alt=""
                            />
                            <p className="ml-3">Sunday</p>
                        </span>
                    </div >
                </div >

                <div className="sm:flex sm:justify-evenly sm:w-full my-4">
                    <hr className="sm:w-1/2 h-px bg-[#593B1F]" />
                </div>





                <div className="flex sm:flex-row  flex-col sm:justify-center sm:w-2/3 sm:mx-auto font-cormorant sm:space-x-7 mx-2 ">


                    <div className=" sm:w-1/2 sm:text-end  text-center pb-2">
                        <p className="text-[#593B1F] font-medium text-lg italic">
                            BLOG HEADING
                        </p>
                        <p className="text-[#593B1F]">Blog Sub Heading</p>
                        <p className="text-[#593B1F] ">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
                            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
                            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
                            Pariatur.
                        </p>
                    </div>

                    <div className="relative  ">
                        <img
                            className="sm:w-72 h-full rounded-sm"
                            src="/image/blogs/blogmonday.png"
                            alt="sdddddddd"
                        />
                        <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10 w-44 mx-2 ">

                            <p className="ml-2 ">21/10/2023</p>{" "}
                            <img
                                className="h-6  mt-[1px] ml-3"
                                src="/image/blogs/blogline.png"
                                alt=""
                            />{" "}
                            <p className="ml-3">Monday</p>
                        </span>
                    </div>


                </div>
            </div>

        </div>

    );
};

export default page;
