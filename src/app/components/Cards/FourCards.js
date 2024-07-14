import React from 'react'
import IconButton from '../buttons.js/iconButton'

export default function FourCards() {
    return (
        <>


            <div className="grid grid-cols-2 md:grid-cols-4  gap-2 p-2 mx-4 md:mx-10">
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative">
                        <img
                            className="w-full sm:h-64  h-75 object-cover rounded-md"
                            src={`/image/4cards/four${num}.png`}
                            alt={`Card ${num}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 pb-3 px-1 ">
                            <div className='bg-[#1B2F1F] bg-opacity-95  h-10 rounded-md p-2 pr-4 w-full'>
                                <div className="flex justify-between items-center">
                                    <div className="flex-grow text-sm  mx-auto">
                                        {num === 1 && <p className='text-[#D1B87A]'>Narikela 1ltr</p>}
                                        {num === 2 && <p className='text-[#D1B87A]' >Narikela 1/4ltr</p>}
                                        {num === 3 && <p className='text-[#D1B87A]'>Narikela 1/2ltr</p>}
                                        {num === 4 && <p className='sm:text-xs text-[#D1B87A]'>Narikela Dessicated Powder</p>}
                                    </div>
                                    <IconButton
                                        icon="fas fa-chevron-right fa-xs text-[#D1B87A]"
                                        className="flex-shrink-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4  gap-2 p-2 mx-4 md:mx-10">
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative">
                        <img
                            className="w-full sm:h-64  h-75 object-cover rounded-md"
                            src={`/image/4cards/four${num}.png`}
                            alt={`Card ${num}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 pb-3 px-1 ">
                            <div className='bg-[#1B2F1F] bg-opacity-95  h-10 rounded-md p-2 pr-4 w-full'>
                                <div className="flex justify-between items-center">
                                    <div className="flex-grow text-sm  mx-auto">
                                        {num === 1 && <p className='text-[#D1B87A]'>Narikela 1ltr</p>}
                                        {num === 2 && <p className='text-[#D1B87A]' >Narikela 1/4ltr</p>}
                                        {num === 3 && <p className='text-[#D1B87A]'>Narikela 1/2ltr</p>}
                                        {num === 4 && <p className='sm:text-xs text-[#D1B87A]'>Narikela Dessicated Powder</p>}
                                    </div>
                                    <IconButton
                                        icon="fas fa-chevron-right fa-xs text-[#D1B87A]"
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
