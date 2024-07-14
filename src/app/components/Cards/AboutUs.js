import React from "react";

export default function AboutUs() {
    return (
        <>
            {/* <div className='flex px-12'>
                <div>
                    <p className='text-xs  '>about us</p>
                    <p className='text-xs '>the world has seen by us</p>
                    <p className='text-xs  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        paria</p>
                    <button>Know More</button>

                </div>
                <div class="grid grid-cols-2 gap-1">
                    <img class="  sm:w-15  w-full h-48 object-cover  rounded-tl-md rounded-es-[100px] rounded-se-[100px] " src="/image/4cards/image1.jpeg" alt="Card 1" />
                    <img class="w-full h-48 object-cover   rounded-tr-md rounded-br-[100px] rounded-tl-[100px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                    <img class="w-full h-48 object-cover   rounded-bl-xl rounded-br-[100px] rounded-tl-[100px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                    <img class="w-full h-48 object-cover  rounded-br-xl rounded-es-[100px] rounded-se-[100px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                </div>

                <div className="grid grid-cols-2 gap-1">
                    <img className="w- h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                    <img className="w-15 h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                    <img className="w-15 h-20 object-cover rounded-bl-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                    <img className="w-15 h-20 object-cover rounded-br-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                </div>
            </div> */}

            {/* <div className='container mx-auto  lg:px-12 md:px-12'>
                <div className='flex flex-col sm:flex-row lg:flex-row items-center lg:items-start gap-8'>
                    <div className='lg:w-1/2 px-11 '>
                        <p className='text-lg font-bold mb-2'>About Us</p>
                        <p className='text-sm font-semibold mb-4'>The World Has Seen By Us</p>
                        <p className='mb-6 text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                            Know More
                        </button>
                    </div>
                    <div className=' '>
                        <div className="grid grid-cols-2 gap-2">
                            <img className="w-15 h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-15 h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-15 h-20 object-cover rounded-bl-xl rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-15 h-20 object-cover rounded-br-xl rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* ///current */}



            <div className="relative w-full h-full">
                <div className="absolute sm:block hidden" >
                    <img src="/image/bannerbackground/aboutbackground.png" alt="" />
                </div>

                <div className="relative z-10">
                    <div className="sm:w-2/1 h-auto  mx-auto">

                        <div className="container mx-auto px-4 py-8">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                <div className="lg:w-1/2 sm:pt-16 md:pt-16 px-3">
                                    <h1 className="text-3xl font-bold mb-2">About Us</h1>
                                    <h2 className="text-2xl font-semibold mb-4">
                                        Generations of Purity
                                    </h2>
                                    <p className="mb-6">
                                        At Narikela, nestled in the lush greenery of Tiptur, our family
                                        heritage of coconut cultivation dates back to 1954. Our legacy is
                                        built on excellence and trust, passed down through generations. We
                                        are expanding beyond copra to offer coconut-based products,
                                        celebrating the coconut's versatility. Our philosophy supports
                                        local farmers with fair and sustainable practices. Each
                                        sun-ripened coconut is handpicked and cold-pressed to preserve its
                                        natural richness, ensuring the highest quality coconut oil
                                    </p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                        Know More
                                    </button>
                                </div>
                                <div className="lg:w-1/2">

                                    <div className="grid grid-cols-2 gap-1 sm:gap-2 px-2 sm:px-4 my-2 sm:my-4">
                                        <img
                                            className="w-full h-24 sm:h-40 md:h-52 object-cover 
                    rounded-tl-sm sm:rounded-tl-md 
                    rounded-es-[40px] sm:rounded-es-[60px] md:rounded-es-[80px] 
                    rounded-se-[40px] sm:rounded-se-[60px] md:rounded-se-[80px]"
                                            src="/image/flower/flower1.png"
                                            alt="Card 1"
                                        />
                                        <img
                                            className="w-full h-24 sm:h-40 md:h-52 object-cover 
                    rounded-tr-sm sm:rounded-tr-md 
                    rounded-br-[40px] sm:rounded-br-[60px] md:rounded-br-[80px] 
                    rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px]"
                                            src="/image/flower/flower2.png"
                                            alt="Card 2"
                                        />
                                        <img
                                            className="w-full h-24 sm:h-40 md:h-52 object-cover 
                    rounded-bl-sm sm:rounded-bl-md 
                    rounded-br-[40px] sm:rounded-br-[60px] md:rounded-br-[80px] 
                    rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px]"
                                            src="/image/flower/flower3.png"
                                            alt="Card 3"
                                        />
                                        <img
                                            className="w-full h-24 sm:h-40 md:h-52 object-cover 
                    rounded-br-sm sm:rounded-br-md 
                    rounded-es-[40px] sm:rounded-es-[60px] md:rounded-es-[80px] 
                    rounded-se-[40px] sm:rounded-se-[60px] md:rounded-se-[80px]"
                                            src="/image/flower/flower4.png"
                                            alt="Card 4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>







            {/* <div className='container mx-auto px-4  w-full'>
                <div className='flex flex-row lg:flex-row items-center lg:items-start'>
                    <div className='w-1/2'>
                        <p className='text-xs font-bold '>About Us</p>
                        <p className='text-xs font-semibold '>The World Has Seen By Us</p>
                        <p className='mb-6 text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                            Know More
                        </button>
                    </div>
                    <div className=''>
                        <div className="grid grid-cols-2 gap-1">
                            <img className="w-15 h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-15 h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-15 h-20 object-cover rounded-bl-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-15 h-20 object-cover rounded-br-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='container mx-auto px-4 w-full'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
                        <p className='text-xs font-bold'>About Us</p>
                        <p className='text-xs font-semibold'>The World Has Seen By Us</p>
                        <p className='mb-6 text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                            Know More
                        </button>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className="grid grid-cols-2 gap-1">
                            <img className="w-full h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-full h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-full h-20 object-cover rounded-bl-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-full h-20 object-cover rounded-br-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
                    <div className='lg:w-1/2'>
                        <h1 className='text-3xl font-bold mb-2'>About Us</h1>
                        <h2 className='text-2xl font-semibold mb-4'>The World Has Seen By Us</h2>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                            Know More
                        </button>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="grid grid-cols-2 gap-2 px-4 my-4">
                            <img className="w-full h-48  :h-10 object-cover rounded-tl-md rounded-es-[80px] rounded-se-[80px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-full h-48 object-cover rounded-tr-md rounded-br-[80px] rounded-tl-[80px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-full h-48 object-cover rounded-bl-xl rounded-br-[80px] rounded-tl-[80px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-full h-48 object-cover rounded-br-xl rounded-es-[80px] rounded-se-[100px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
                    <div className='lg:w-1/2'>
                        <h1 className='text-3xl font-bold mb-2'>About Us</h1>
                        <h2 className='text-2xl font-semibold mb-4'>The World Has Seen By Us</h2>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                            Know More
                        </button>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="grid grid-cols-2 gap-2 px-4 my-4">
                            <img className="w-full h-48  :h-10 object-cover rounded-tl-md rounded-es-[80px] rounded-se-[80px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-full h-48 object-cover rounded-tr-md rounded-br-[80px] rounded-tl-[80px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-full h-48 object-cover rounded-bl-xl rounded-br-[80px] rounded-tl-[80px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-full h-48 object-cover rounded-br-xl rounded-es-[80px] rounded-se-[100px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-lg font-semibold uppercase mb-2">ABOUT US</h2>
                        <h1 className="text-3xl font-bold mb-4">The World Has Seen By Us</h1>
                        <p className="mb-6 text-gray-600">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                            Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                            Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
                            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
                            Pariatur
                        </p>
                        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                            Know More
                        </button>
                    </div>

                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2 gap-2">
                            <img className="w-full h-48 object-cover  rounded-tl-md rounded-es-[100px] rounded-se-[100px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-full h-48 object-cover rounded-tr-md rounded-br-[100px] rounded-tl-[100px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-full h-48 object-cover rounded-bl-xl rounded-br-[100px] rounded-tl-[100px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-full h-48 object-cover rounded-br-xl rounded-es-[100px] rounded-se-[100px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
