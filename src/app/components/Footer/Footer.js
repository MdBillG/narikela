'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
    const router = useRouter()
    return (
        <>
            <footer className="bg-[#1B2F1F]">
                <div className="mb-5">

                    <div className="bg-[#1B2F1F] mb-4 pt-5">
                        <img className="w-10 h-10 sm:ml-10 mx-4" src="/image/brandicon/barndlogo.png" alt="" onClick={() => router.push('/')} />

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:text-center text-sm text-start bg-[#1B2F1F] sm:mx-10 mx-4 font-poppins text-[#F3EEE1]">
                        <div className="flex flex-col">
                            <div className="text-start ">
                                Narikela, from Tiptur since 1954, offers premium cold-pressed
                                coconut oil. We honor tradition with quality, supporting local
                                farmers and sustainable practices.
                            </div>
                            <div className="flex gap-6 mt-3">
                                <img className="h-6" src="/icons/footer/facebook.png" alt="" />
                                <img className="h-6" src="/icons/footer/youtube.png" alt="" />
                                <img className="h-6" src="/icons/footer/instagram.png" alt="" />


                            </div>
                        </div>
                        <div className="flex flex-col mt-3 gap-1 sm:mt-0">

                            <a href="/about" className="hover:text-green-300">
                                About Us
                            </a>

                            <a href="/plp" className="hover:text-green-300">
                                Products
                            </a>

                            <a href="/blogs" className="hover:text-green-300">
                                Blogs
                            </a>

                            <a href="/contact" className="hover:text-green-300">
                                Contact Us
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0" >
                            <div className="flex "> <img className="h-6" src="/icons/footer/call.png" alt="" /><p className="ml-1">+91-9148633721</p> </div>
                            <div className="flex mt-1"> <img className="h-6" src="/icons/footer/mail.png" alt="" /><p className="ml-1">narikela.tiptur@gmail.com</p> </div>
                            <div className="flex mt-1"> <img className="h-6" src="/icons/footer/distance.png" alt="" /><p className="ml-1"> Vinayaka Nagara, Tiptur Tumkur district-572201</p> </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center bg-[#D1B87A] text center h-10 items-center">

                    <img className="h-5" src="/icons/footer/copyright.png" alt="" />


                </div>
            </footer>


        </>
    );
};

export default Footer;
