"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect, useState } from "react";
import { coconutData, pdp, keyFeature, ingredients, use1, use2 } from "@/coconut-oil";
import AwesomeSlider from "react-awesome-slider";


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
                        <a href="" className="mr-1">
                            Home
                        </a>
                        <img
                            className="h-3 sm:h-6 mt-[2px]"
                            src="/image/blogs/blogline.png"
                            alt=""
                        />
                        <a href="" className="ml-1">
                            Blogs
                        </a>
                    </span>
                </div>
            </div>
            <div className="sm:ml-[100px] lg:ml-[100px] md:ml[100pxs] ml-2">
                <div className=" text-xl font-semibold text-[#593B1F]  italic pt-4 sm:w-3/4 mx-auto">
                    NARIKELA TREASURES
                </div>
            </div>

            <div className="flex sm:justify-center sm:flex-row  justify-center">

                <div className="flex sm:flex-row  flex-col ">
                    <div className="drop-shadow-2xl sm:w-[435px]  ml-2">
                        <img className="  " src={pdp[0].main} alt="" />
                    </div>

                    <div className=" sm:flex hidden mb-[1px] mt-[1px] drop-shadow-2xl  sm:flex-col">
                        <img className="sm:w-40 sm:h-36 w-[122px]" src={pdp[0].side1} alt="" />
                        <img className="sm:w-40 sm:h-36  w-[122px]" src={pdp[0].side2} alt="" />
                        <img className="sm:w-40 sm:h-36  w-[122px]" src={pdp[0].side3} alt="" />
                    </div>
                </div>


                <div className=" flex sm:flex-col sm:ml-4 sm:justify-end sm:my-2 flex-col justify-end mb-2  " >
                    <div className="font-poppins mr-2">
                        <p className="font-poppins font-semibold sm:text-xs text-[10px]">Narikela 1 ltr Coconut Oil</p>
                        <h6 className="font-[1px] sm:text-[7px] text-[5px]">MRP INCLUSIVE OF ALL TAXES</h6>
                        <div className="flex ">
                            <img className="w-4 h-4 mt-1" src="/image/pdp/currencylogo.png" alt="" /> <p>499</p>
                        </div>
                    </div>

                    <div className="flex flex-col  text-sm border border-gray-900 i pl-2 pt-2 pb-2 shadow-lg drop-shadow-2xl border-opacity-30 rounded-sm sm:w-40 w-28 font-poppins mr-2">
                        <div className="flex pb-1  ">
                            <img className="sm:w-5 sm:h-4 w-4 h-3  mt-1" src="/image/pdp/verified.png" alt="" />
                            <p className="sm:pl-2 pl-1 text-[#593B1F] sm:text-sm text-[10px] "> 100% </p>
                            <p className="sm:pl-1  pl-0.5 sm:text-sm text-[10px]">Genuine</p>
                        </div>
                        <div className="flex  pb-1 ">
                            <img className="sm:w-5 sm:h-4 w-4 h-3 mt-1" src="/image/pdp/payment-method 1.png" alt="" />
                            <p className="sm:pl-2 pl-1  text-[#593B1F]sm:text-sm text-[10px]"> Secure </p>
                            <p className="sm:pl-1 pl-0.5 sm:text-sm text-[10px]"> Payment</p>
                        </div>
                        <div className="flex">
                            <img className="sm:w-5 sm:h-4 w-4 h-3 mt-1" src="/image/pdp/shipped.png" alt="" />
                            <p className="sm:pl-2 pl-1 text-[#593B1F] sm:text-sm text-[10px] "> Free </p>{" "}
                            <p className="sm:pl-1 pl-0.5 sm:text-sm text-[10px]">Shipping</p>
                        </div>
                    </div>

                    <button className="bg-[#D1B87A] text-[#1B2F1F] font-poppins rounded-md sm:w-40 w-28 py-2 mt-2 drop-shadow-lg">Order Now</button>
                </div>


            </div>

            <div className=" sm:hidden  sm:mb-[1px] sm:mt-[1px] drop-shadow-2xl flex sm:flex-col mx-auto items-center justify-center ml-1">
                <img className="sm:w-40 sm:h-36 w-[32.5%] " src={pdp[0].side1} alt="" />
                <img className="sm:w-40 sm:h-36 w-[32.5%]" src={pdp[0].side2} alt="" />
                <img className="sm:w-40 sm:h-36 w-[32.5%]" src={pdp[0].side3} alt="" />
            </div>


            <div className=" sm:my-10 ">
                <h1 className="sm:w-4/5 w-[93%] sm:mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins border-b border-[#593B1F] mx-auto">Product Description</h1>

                <div className="sm:w-4/5 w-[93%] mx-auto my-2 font-poppins ">
                    <div className="flex gap-1 sm:text-xl text-xs"><p className=" sm:text-xl font-medium text-[#1B2F1F] text-xs ">Size :</p><p className="mt-[3px] sm:text-xl text-xs"> 1ltr -1000ml</p></div>
                    <div className="flex gap-1 sm:text-xl text-xs"><p className="sm:text-xl font-medium text-[#1B2F1F]  text-xs">Used For :</p> <p className="mt-[3px] sm:text-xl text-xs">Cooking oil, Body Lotion, Hair Oil</p></div>
                    <p className="text-[#1B2F1F] sm:text-xl text-xs ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt iure quam illum nobis, modi suscipit assumenda alias. Voluptates quidem quod nesciunt id quae labore non sequi? Odit, magnam velit?</p>

                </div>

            </div>
            <div className=" sm:w-4/5 w-[93%] mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins my-2 border-b border-[#593B1F]">Why Use Narikela Coconut Oil?</div>

            <div className="flex mx-auto justify-center">
                {keyFeature.map((k, index) => (
                    <img className="sm:w-1/4  w-[32%] mt-2" key={index} src={k.key} alt="image not here" />
                ))}
            </div>
            <div className=" sm:w-4/5 w-[93%] mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins my-2 border-b border-[#593B1F]"> Key Features Of Our Products</div>

            {/* 
            <div className="flex flex-col bg-[#EBEAD5] sm:w-4/5 w-5/6 mx-auto border border-[#593B1F] border-opacity-40 drop-shadow-xl">
                <div className="flex justify-evenly py-4 mx-auto w-full ">
                    {use1?.map((k, index) => (
                        <div className="flex flex-col items-center"><img
                            className="w-24 bg-[#D1B87A] h-24 p-4 rounded-full"
                            key={index}
                            src={k.use}
                            alt="image not here" />
                            <p>{k.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-evenly mx-auto w-full py-4">
                    {use2?.map((k, index) => (
                        <div className="flex flex-col items-center"><img
                            className="w-24 bg-[#D1B87A] h-24 p-4 rounded-full"
                            key={index}
                            src={k.use}
                            alt="image not here" /><p>{k.name}</p></div>

                    ))}
                </div>
            </div> */}
            <div className=" sm:w-4/5  mx-auto  flex justify-center">
                <img className=" sm:w-6/7  w-[94%] mt-2" src="/image/pdp/group.png" alt="" />
            </div>

            <div className=" sm:w-4/5 w-[93%] mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins my-2 border-b border-[#593B1F]"> Ingredients Used For Production</div>



            <div className="flex mx-auto justify-center">
                {ingredients?.map((k, index) => (
                    <img className="sm:w-1/4   w-[32%]" key={index} src={k.ingredients} alt="image not here" />
                ))}
            </div>
            {/* <div className='relative w-1/2 h-1/2 mx-auto z-10 my-auto '>
                <AwesomeSlider mobileTouch={true} infinite={true} >
                    <div className="w-full h-1/2">
                        <img className="w-full h-full object-cover " src="/image/banner/coconutbanner2.jpg" alt="Coconut Banner 2" />
                    </div>
                    <div className="w-full h-1/2">
                        <img className="w-full h-full object-cover" src="/image/banner/coconutbanner4.jpg" alt="Coconut Banner 4" />
                    </div>
                    <div className="w-full h-1/2">
                        <img className="w-full h-full object-cover" src="/image/banner/coconutbanner5.jpg" alt="Coconut Banner 5" />
                    </div>
                </AwesomeSlider>
            </div> */}

        </div >
    );
}
