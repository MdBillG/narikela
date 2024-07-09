import React from 'react'
import IconButton from '../buttons.js/iconButton'

export default function FourCards() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 mx-4 md:mx-10">
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative">
                        <img
                            className="w-full h-48 object-cover rounded-xl"
                            src={`/image/4cards/image${num}.jpeg`}
                            alt={`Card ${num}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 pb-3 px-1 ">
                            <div className='bg-white bg-opacity-80 rounded-full p-2 pr-4 w-full'>
                                <div className="flex justify-between items-center  ">
                                    <div className="flex-grow  "></div>
                                    <IconButton
                                        icon="fas fa-chevron-right fa-xs"
                                        className="flex-shrink-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
