"use client";

import React, { useState } from "react";
import Header from "../components/Header/Header";

import { coconutData } from "@/coconut-oil";
import { useRouter } from "next/navigation";

export default function page() {
    const [product, setProduct] = useState("all");
    const router = useRouter();

    console.log("coconutData", coconutData);

    // Accessing Coconut Oil variants
    const coconutOilVariants = coconutData[0].coconut[0]?.variants?.map(
        (variant) => ({
            mrp: variant.mrp,
            id: variant.id,
            sellingPrice: variant?.sellingPrice,
            mainImage: variant?.mainImage,
            name: variant?.name,
            icon: variant.icon,
            benefits: variant?.benefits,
        })
    );
    console.log("coconutOilVariants", coconutOilVariants);

    const DesssicatePowder = coconutData[0].DesssicatePowder[0]?.variants?.map(
        (variant) => ({
            mrp: variant.mrp,
            id: variant.id,
            mainImage: variant?.image,
            name: variant?.name,
            icon: variant.icon,
            benefits: variant?.benefits,
        })
    );

    console.log("DesssicatePowder", DesssicatePowder);

    const coconutOilImages = coconutData[0]?.coconut[0]?.variants?.map(
        (variant) => {
            if (typeof variant.image === "string") {
                return variant.image; // Handle the case where image is a string URL directly
            } else if (Array.isArray(variant.image)) {
                return variant.image[0]?.oil; // Extract the oil image URL from the image array
            } else {
                return null; // Handle other cases if necessary
            }
        }
    );

    console.log(coconutOilImages);

    console.log("coconutOilVariants", coconutOilVariants);

    const data =
        product === "all"
            ? [...coconutOilVariants, ...DesssicatePowder]
            : product === "coconutOilVariants"
                ? coconutOilVariants
                : DesssicatePowder;

    console.log("data", data);

    return (
        <>
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

            <div className="flex flex-col justify-center text-center">
                <span className=' text-xl font-semibold text-[#593B1F]  italic pt-4 '> NARIKELA TREASURES</span>
                <span className=' text-4xl  text-[#1B2F1F] text-center  mt-4'> Experience Purity in Every Drop</span>
            </div>
            <div className="font-poppins mx-3">
                {/* <div className="flex flex-row gap-4">
        <button onClick={() => setProduct("all")}>all</button>
        <button onClick={() => setProduct("coconutOilVariants")}>oil</button>
        <button onClick={() => setProduct("DesssicatePowder")}>powder</button>
    </div> */}
                <div className=" grid grid-cols-2 sm:grid-cols-4 mx-1 gap-3 drop-shadow-2xl my-10  ">
                    {data?.map((variant, index) => (
                        <div
                            key={variant.id}
                            // className=" border-b border-b-black shadow-2xl rounded-lg"
                            // style={{
                            //     borderRight: index % 2 === 0 ? "0.5px solid black" : "none",
                            //     borderLeft: index % 2 !== 0 ? "0.5px solid black" : "none",
                            // }}
                            onClick={() => router.push(`/productDetail/${variant.id}`)}
                        >
                            <div className="border border-[#D1B87A] rounded-lg drop-shadow-sm shadow-xl pb-4 border-opacity-25">
                                <img src={variant.mainImage} alt="" className="rounded-t-lg" />
                                <div className="bg-[#1B2F1F] h-[1px] "></div>

                                <p className="mx-4 font-medium text-[#1B2F1F] mt-2">
                                    {variant.name}
                                </p>
                                <div className="mx-2">
                                    <div className="grid grid-cols-2 gap-1 mt-2 mx-1 ">
                                        {variant.benefits.map((benefit, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center text-start font-thin text-xs text-[#1B2F1F]"
                                            >
                                                <img
                                                    src={variant.icon}
                                                    alt=""
                                                    className="w-2 h-2 mr-2"
                                                />
                                                <span className="sm:text-xs text-[9px] ">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button className=" sm:w-64 w-32 border-[#D1B87A] text-[#D1B87A] border-opacity-55 bg-[#1B2F1F] mx-5 rounded-md h-8 items-center">
                                        View Product
                                    </button>
                                </div>
                            </div>

                            {/* <div>
                {variant.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex flex-row items-center mb-1">
                        <img src={variant.icon} alt="" lassName="w-3 h-3 mr-2" />
                        <span className="sm:text-sm text-xs">{benefit}</span>
                    </div>
                ))}
            </div> */}

                            {/* <div className="flex flex-wrap mt-2 px-2 py-1 bg-[#FFF9E5]">
                {variant.benefits.map((benefit, idx) => (
                    <div key={idx} className={`flex items-center ${idx < 3 ? 'w-1/3' : idx < 5 ? 'w-1/2' : 'w-full'} mb-1`}>
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-[#4A4A4A] break-words">{benefit}</span>
                    </div>
                ))}
            </div> */}
                            {/* <p>MRP: {variant.mrp}</p>
            <p>ID: {variant.id}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
