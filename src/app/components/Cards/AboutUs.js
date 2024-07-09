import React from 'react'

export default function AboutUs() {
    return (

        <>
            <div className='flex px-12'>
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
                {/* <div class="grid grid-cols-2 gap-1">
                    <img class="  sm:w-15  w-full h-48 object-cover  rounded-tl-md rounded-es-[100px] rounded-se-[100px] " src="/image/4cards/image1.jpeg" alt="Card 1" />
                    <img class="w-full h-48 object-cover   rounded-tr-md rounded-br-[100px] rounded-tl-[100px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                    <img class="w-full h-48 object-cover   rounded-bl-xl rounded-br-[100px] rounded-tl-[100px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                    <img class="w-full h-48 object-cover  rounded-br-xl rounded-es-[100px] rounded-se-[100px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                </div> */}

                <div className="grid grid-cols-2 gap-1">
                    <img className="w- h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                    <img className="w-15 h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                    <img className="w-15 h-20 object-cover rounded-bl-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                    <img className="w-15 h-20 object-cover rounded-br-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                </div>
            </div>

            <div className='container mx-auto px-4'>
                <div className='flex flex-col  sm:flex-row lg:flex-row items-center lg:items-start gap-8'>
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
                    <div className=' '>
                        <div className="grid grid-cols-2 gap-2">
                            <img className="w-15 h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-15 h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-15 h-20 object-cover rounded-bl-xl rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-15 h-20 object-cover rounded-br-xl rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4'>
                <div className='flex flex-col  sm:flex-row lg:flex-row items-center lg:items-start gap-8'>
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
                    <div className=' '>
                        <div className="grid grid-cols-2 gap-2">
                            <img className="w-15 h-20 object-cover rounded-tl-sm rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image1.jpeg" alt="Card 1" />
                            <img className="w-15 h-20 object-cover rounded-tr-sm rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image2.jpeg" alt="Card 2" />
                            <img className="w-15 h-20 object-cover rounded-bl-xl rounded-br-[50px] rounded-tl-[50px]" src="/image/4cards/image3.jpeg" alt="Card 3" />
                            <img className="w-15 h-20 object-cover rounded-br-xl rounded-es-[50px] rounded-se-[50px]" src="/image/4cards/image4.jpeg" alt="Card 4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4  w-full'>
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
            </div>

            <div className='container mx-auto px-4 w-full'>
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
            </div>

        </>

    )
}
