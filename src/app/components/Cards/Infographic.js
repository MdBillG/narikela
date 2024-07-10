import React from 'react'

export default function Infographic() {
    return (
        <div>
            <h1 className='font-semibold  text-center mx-4 sm:mx-10 md:mx-14 lg:mx-20 xl:mx-20 2xl:mx-24 '>
                Our process infographic comes here
            </h1>
            <div className=" p-2 mx-9 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 items-center">

                {/* <div className="relative"> */}
                <img
                    className="w-full h-full object-cover rounded-xl"
                    src={`/image/4cards/image2.jpeg`}
                    alt={`Card`}
                />

                {/* </div> */}

            </div>
        </div>
    )
}
