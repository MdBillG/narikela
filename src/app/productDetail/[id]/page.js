"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect, useState } from "react";
import { coconutData, pdp, keyFeature, ingredients, use1, use2 } from "@/coconut-oil";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../components/Cards/slider.css'
import { useParams } from "next/navigation";
import PdpKeyFeatures from "@/app/components/Cards/PdpKeyFeatures";


export default function page() {
    const [currentImage, setCurrentImage] = useState(pdp[0].main)
    const { id } = useParams()
    const [size, setSize] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")

    const [product, setProduct] = useState("all");

    console.log("size", size)
    console.log("coconutData", coconutData)
    console.log("params", id)

    const presentId = coconutData[0].coconut[0].variants.filter((i) => i.id === id);
    const handleClick = () => {
        window.open('http://wa.me/c/919148633721', '_blank');
    };
    console.log("presentItem", presentId)

    useEffect(() => {
        const newProducts = presentId.map((details) => ({
            id: details.id,
            mrp: setPrice(details?.mrp),
            name: setName(details?.name),
            size: setSize(details?.size),
            second: setSecondName(details?.secondName)
        }));

    }, [presentId]);


    const coconutOilVariants = coconutData[0].coconut[0]?.variants?.map(
        (variant) => ({
            mrp: variant.mrp,
            id: variant.id,
            sellingPrice: variant?.sellingPrice,
            mainImage: variant?.mainImage,
            name: variant?.name,
            icon: variant.icon,
            benefits: variant?.benefits,
            sellingPrice: variant?.sellingPrice,

        })
    );

    const DesssicatePowder = coconutData[0].DesssicatePowder[0]?.variants?.map(
        (variant) => ({
            id: variant.id,
            mainImage: variant?.image,
            name: variant?.name,
            icon: variant.icon,
            benefits: variant?.benefits,
            mrp: variant?.mrp,
            sellingPrice: variant?.sellingPrice,
        })
    );

    const data = [...coconutOilVariants, ...DesssicatePowder]
    const firstVariant = data?.[0] || {};
    const benefits = firstVariant.benefits || [];
    const icon = firstVariant.icon;

    return (
        <div className="">
            <div className="relative">
                <div className='sm:block hidden'>
                    <img className="h-full" src="/image/banner/productsl.jpg" alt="" />
                </div>
                <div className='sm:hidden block'>
                    <img className="h-full" src="/image/banner/productsm.jpg" alt="" />
                </div>
                <div className="absolute bottom-[4%] left-[28%] sm:left-[500px]  sm:text-center my-auto bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl p-2 sm:p-4 flex flex-col justify-center items-center sm:w-[25%] font-cormorant">
                    <p className="text-xs sm:text-xl text-[#F3EEE1] ">
                        Experience The
                    </p>
                    <p className="text-xs sm:text-xl text-[#F3EEE1] ">
                        Natural Goodness
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
                        <img
                            className="h-3 sm:h-6 mx-1"
                            src="/image/blogs/blogline.png"
                            alt=""
                            width={3}
                            height={24}
                        />
                        <a href="/" className="ml-1 whitespace-nowrap">
                            {secondName}
                        </a>
                    </div>
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
                        <img className=" w-full " src={currentImage} alt="" />
                    </div>

                    <div className=" sm:flex hidden mb-[1px] mt-[1px] drop-shadow-2xl  sm:flex-col">
                        <img className="sm:w-40 sm:h-36 w-[122px]" src={pdp[0].side1} alt="" />
                        <img className="sm:w-40 sm:h-36  w-[122px]" src={pdp[0].side2} alt="" />
                        <img className="sm:w-40 sm:h-36  w-[122px]" src={pdp[0].side3} alt="" />
                    </div>
                </div>


                <div className=" flex sm:flex-col sm:ml-4 sm:justify-end sm:my-2 flex-col justify-end mb-2 sm:flex hidden " >
                    <div className="font-poppins mr-2">
                        <p className="font-poppins font-semibold sm:text-xs text-[10px]">{name}</p>
                        <h6 className="font-[1px] sm:text-[7px] text-[5px]">MRP INCLUSIVE OF ALL TAXES</h6>
                        <div className="flex ">
                            <img className="w-4 h-4 mt-1" src="/image/pdp/currencylogo.png" alt="" /> <p>{price}</p>
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

                    <button className="bg-[#D1B87A] text-[#1B2F1F] font-poppins rounded-md sm:w-40 w-28 py-2 mt-2 drop-shadow-lg" onClick={() => handleClick}>Order Now</button>
                </div>



            </div>

            <div className=" sm:hidden  sm:mb-[1px] sm:mt-[1px] drop-shadow-2xl flex sm:flex-col mx-auto items-center justify-center ml-1">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={7}
                    slidesPerView={3}
                    loop={true}
                    cssMode={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide >
                        <img onClick={() => setCurrentImage(pdp[0].side1)} className="w-full h-auto" src={pdp[0].side1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img onClick={() => setCurrentImage(pdp[0].side2)} className="w-full h-auto" src={pdp[0].side2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img onClick={() => setCurrentImage(pdp[0].side3)} className="w-full h-auto" src={pdp[0].side3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img onClick={() => setCurrentImage(pdp[0].main)} className="w-full h-auto" src={pdp[0].side3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className=" flex   mx-2 flex-col  mb-2 sm:hidden " >
                <div className="font-poppins mr-2">
                    <p className="font-poppins font-semibold text-[16px]">{name}</p>
                    <h6 className="font-[3px]  text-[12px]">MRP INCLUSIVE OF ALL TAXES</h6>
                    <div className="flex ">
                        <img className="w-5 h-5 mt-1" src="/image/pdp/currencylogo.png" alt="" /> <p className="text-[20px]">{price}</p>
                    </div>
                </div>

                <div className="flex ">

                    <div className="font-poppins  sm:hidden block  rounded-sm w-[50%]">
                        {benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex  text-[#1B2F1F]">
                                <img src={icon} alt="" className="w-2 h-2 " />
                                <span className="text-[9px] sm:text-xs">{benefit}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col  text-sm border border-gray-900  pl-2 pt-2 pb-2 shadow-lg drop-shadow-2xl border-opacity-30 rounded-sm sm:w-40 w-28 font-poppins mr-2">
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

                </div>

                <button
                    onClick={handleClick}
                    className="bg-[#D1B87A] text-[#1B2F1F] font-poppins rounded-md sm:w-40 w-28 py-2 mt-2 drop-shadow-lg"
                >
                    Order Now
                </button>
            </div>




            <div className=" sm:my-10 ">
                <h1 className="sm:w-4/5 w-[93%] sm:mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins border-b border-[#593B1F] mx-auto">Product Description</h1>

                <div className="sm:w-4/5 w-[93%] mx-auto my-2 font-poppins ">
                    <div className="flex gap-1 sm:text-xl text-xs"><p className=" sm:text-xl font-medium text-[#1B2F1F] text-xs ">Size :</p><p className="mt-[px] sm:text-xl text-xs"> {size}</p></div>
                    <div className="flex gap-1 sm:text-xl text-xs"><p className="sm:text-xl font-medium text-[#1B2F1F]  text-xs">Used For :</p> <p className="mt-[x] sm:text-xl text-xs">Cooking oil, Body Lotion, Hair Oil</p></div>
                    <p className="text-[#1B2F1F] sm:text-xl text-xs ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt iure quam illum nobis, modi suscipit assumenda alias. Voluptates quidem quod nesciunt id quae labore non sequi? Odit, magnam velit?</p>

                </div>

            </div>
            <div className=" sm:w-4/5 w-[93%] mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins my-2 border-b border-[#593B1F]">Why Use Narikela Coconut Oil?</div>



            <div className="sm:block hidden mx-4">
                <div className="flex  justify-center-center mx-auto  sm:w-4/5 ">
                    {keyFeature.map((k, index) => (
                        <img className="sm:w-1/4  w-[32%] mt-2" key={index} src={k.key} alt="image not here" />
                    ))}
                </div>
            </div>

            <div className="flex mx-auto justify-center sm:hidden  w-[93%]  ">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={7}
                    slidesPerView={3}
                    loop={true}
                    pagination={{
                        clickable: true,

                    }}

                >
                    {keyFeature?.map((k, index) => (
                        <SwiperSlide key={index}>
                            <img
                                // onClick={() => setCurrentImage(pdp[0].side1)}
                                className="w-full h-auto"
                                src={k.key}
                                alt={`Ingredient ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className=" sm:w-4/5 w-[93%] mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins my-2 border-b border-[#593B1F]"> Key Features Of Our Products</div>


            <div className=" sm:w-4/5  mx-auto  flex justify-center sm:block hidden ">
                <img className=" sm:w-6/7  w-[94%] mt-2" src="/image/pdp/group.png" alt="" />
            </div>

            <PdpKeyFeatures />

            <div className=" sm:w-4/5 w-[93%] mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins my-2 border-b border-[#593B1F]"> Ingredients Used For Production</div>


            <div className="sm:block hidden">
                <div className="flex mx-auto justify-center sm:w-4/5">
                    {ingredients?.map((k, index) => (
                        <img className="sm:w-1/4   w-[32%]" key={index} src={k.ingredients} alt="image not here" />
                    ))}
                </div>
            </div>



            <div className="flex mx-auto justify-center sm:hidden w-[93%]">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={7}
                    slidesPerView={3}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {ingredients?.map((k, index) => (
                        <SwiperSlide key={index}>
                            <img
                                // onClick={() => setCurrentImage(pdp[0].side1)}
                                className="w-full h-auto"
                                src={k.ingredients}
                                alt={`Ingredient ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div >
    );
}
