"use client"

import React, { useState } from 'react'
import IconButton from '../buttons.js/iconButton'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
        "/image/banner/coconutbanner2.jpg",
        "/image/banner/coconutbanner4.jpg",
        "/image/banner/coconutbanner5.jpg"
    ]


    return (
        <>
            {/* <div className="relative">
            <IconButton handleClick={prevSlide} icon="fas fa-chevron-left text-emerald-500 absolute top-1/2 left-20 transform -translate-y-1/2" />
            <img className="px-1 w-full" src={images[currentIndex]} alt="banner" />
            <IconButton handleClick={nextSlide} icon="fas fa-chevron-right text-emerald-500 absolute top-1/2 right-20 transform -translate-y-1/2" />

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`cursor-pointer inline-block h-2 w-2 rounded-full ${index === currentIndex ? 'bg-emerald-500' : 'bg-gray-400'}`}
                    ></span>
                ))}
            </div>
        </div> */}
            {/* <div>
                <img src="/image/bannerbackground/bannerbackground.png" alt="" />
                <img src="/image/bannerbackground/bannerbackground2.png" alt="" />
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img
                    src="/image/bannerbackground/bannerbackground.png"
                    alt="Coconut palm trees"
                    className="w-full h-full object-cover filter blur-sm"
                />
            </div>

            <div className='w-1/2 h-1/2 mx-auto'>
                <AwesomeSlider mobileTouch="true" infinite="true " >
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="/image/banner/coconutbanner2.jpg" />
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="/image/banner/coconutbanner4.jpg" />
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="/image/banner/coconutbanner5.jpg" />
                    </div>

                </AwesomeSlider>
            </div> */}

            <div className=" ">
                <img
                    src="/image/bannerbackground/bannerbackground22.png"
                    alt="Background"
                    className="w-full h-full "
                />

            </div>

            {/* <div className="relative inner-shadow">
                <div className="absolute ">
                    <img
                        src="/image/bannerbackground/bannerbackground22.png"
                        alt="Background"
                        className="w-full h-full "
                    />
                    <div className="absolute "></div>
                </div>
                <div className='h-15 '>
                    <div className='relative w-1/2 h-1/2 mx-auto z-10 my-auto '>
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
                    </div>
                </div>
            </div> */}
        </>
    )
}
