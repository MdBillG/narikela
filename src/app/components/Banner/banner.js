"use client"

import React, { useState } from 'react'

import 'react-awesome-slider/dist/styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HOMEBANNER, HOMEBANNERM } from "@/coconut-oil";

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
        "/image/banner/coconutbanner2.jpg",
        "/image/banner/coconutbanner4.jpg",
        "/image/banner/coconutbanner5.jpg"
    ]


    return (
        <>
            <div className="sm:block hidden ">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={7}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {HOMEBANNER[0].images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                // onClick={() => setCurrentImage(pdp[0].side1)}
                                className="w-full h-auto"
                                src={image.image}
                                alt={`Instagram image ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="sm:hidden block">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={7}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {HOMEBANNERM[0].images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                // onClick={() => setCurrentImage(pdp[0].side1)}
                                className="w-full h-auto"
                                src={image.image}
                                alt={`Instagram image ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
