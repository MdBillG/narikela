"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect, useState } from "react";
import { coconutData, pdp, keyFeature, ingredients, use1, use2 } from "@/coconut-oil";


export default function page() {
    const [screenWidth, setScreenWidth] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    console.log("use1", use1);

    console.log("use2", use2);

    return (
        <div className="">
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

            <span className=" text-xl font-semibold text-[#593B1F]  italic pt-4 ">
                NARIKELA TREASURES
            </span>
            <div className="flex justify-center  ">

                <div className="flex ">
                    <div className="drop-shadow-2xl w-[435px]">
                        <img className="  " src={pdp[0].main} alt="" />
                    </div>

                    <div className="mb-[1px] mt-[1px] drop-shadow-2xl">
                        <img className="w-40 h-36" src={pdp[0].side1} alt="" />
                        <img className="w-40 h-36" src={pdp[0].side2} alt="" />
                        <img className="w-40 h-36" src={pdp[0].side3} alt="" />
                    </div>
                </div>


                <div className=" flex flex-col ml-4 justify-end my-2">
                    <div className="font-poppins">
                        <p className="font-poppins font-semibold">Narikela 1 ltr Coconut Oil</p>
                        <h6 className="font-[1px] text-[7px]">MRP INCLUSIVE OF ALL TAXES</h6>
                        <div className="flex ">
                            <img src="/image/pdp/currencylogo.png" alt="" /> <p>499</p>
                        </div>
                    </div>

                    <div className="flex  flex-col text-sm border border-gray-900 items-start pl-2 pt-2 pb-2 shadow-lg drop-shadow-2xl border-opacity-30 rounded-sm w-40 font-poppins">
                        <div className="flex pb-2  ">
                            <img className="w-5 h-4" src="/image/pdp/verified.png" alt="" />{" "}
                            <p className="pl-2 text-[#593B1F]"> 100% </p>
                            <p className="pl-1 text-sm">Genuine</p>
                        </div>
                        <div className="flex  pb-2 ">
                            <img className="w-5 h-4" src="/image/pdp/payment.png" alt="" />
                            <p className="pl-2 text-[#593B1F]"> Secure </p>
                            <p className="pl-1 text-sm"> Payment</p>
                        </div>
                        <div className="flex">
                            <img className="w-5 h-4" src="/image/pdp/shipped.png" alt="" />
                            <p className="pl-2 text-[#593B1F]"> Free </p>{" "}
                            <p className="pl-1 text-sm">Shipping</p>
                        </div>
                    </div>

                    <button className="bg-[#D1B87A] text-[#1B2F1F] font-poppins rounded-md w-28 py-2 mt-2">Order Now</button>
                </div>

            </div>


            <div className="my-10">
                <h1>Product Description</h1>
                <div className="bg-[#593B1F] w-4/5  mx-auto">
                    <hr className="border-t-1 border-[#593B1F] " />
                </div>
                <div className="w-4/5  mx-auto">
                    <div><p>Size :</p> <p>1ltr -1000ml</p></div>
                    <div><p>Used For :</p> <p>Cooking oil, Body Lotion, Hair Oil</p></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt iure quam illum nobis, modi suscipit assumenda alias. Voluptates quidem quod nesciunt id quae labore non sequi? Odit, magnam velit?</p>

                </div>

                <div className=" w-4/5  mx-auto"> Key Features Of Our Products</div>
                <div className="bg-[#593B1F] w-4/5  mx-auto">
                    <hr className="border-t-1 border-[#593B1F] " />
                </div>
            </div>

            <div className="flex   mx-auto justify-center">
                {keyFeature.map((k, index) => (
                    <img className="w-1/4" key={index} src={k.key} alt="image not here" />
                ))}
            </div>
            <div className=" w-4/5  mx-auto"> Key Features Of Our Products</div>
            <div className="bg-[#593B1F] w-4/5  mx-auto">
                <hr className="border-t-1 border-[#593B1F] " />
            </div>

            <div className="flex flex-col bg-[#EBEAD5] w-4/5 mx-auto border border-[#593B1F] border-opacity-40 drop-shadow-xl">
                <div className="flex justify-between mx-32 ">
                    {use1?.map((k, index) => (
                        <><img
                            className="w-24 bg-[#D1B87A] h-24 p-4 rounded-full"
                            key={index}
                            src={k.use}
                            alt="image not here" />
                            <p></p>
                        </>
                    ))}
                </div>

                <div className="flex justify-evenly mx-auto w-full py-4">
                    {use2?.map((k, index) => (
                        <img
                            className="w-24 bg-[#D1B87A] h-24 p-4 rounded-full"
                            key={index}
                            src={k.use}
                            alt="image not here"
                        />
                    ))}
                </div>
            </div>






            <div className=" w-4/5  mx-auto ">
                <img src="/image/pdp/group.png" alt="" />
            </div>

            <div className=" w-4/5  mx-auto"> Ingredients Used For Production</div>

            <div className="bg-[#593B1F] w-4/5  mx-auto">
                <hr className="border-t-1 border-[#593B1F] " />
            </div>

            <div className="flex   mx-auto justify-center">
                {ingredients?.map((k, index) => (
                    <img className="w-1/4" key={index} src={k.ingredients} alt="image not here" />
                ))}
            </div>

        </div>
    );
}
