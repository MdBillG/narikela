import React from 'react'
import IconButton from '../buttons.js/iconButton'
import { fourCards } from '@/coconut-oil'
import { useRouter } from 'next/navigation'

export default function FourCards() {
    const router = useRouter();
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-3  p-2 mx-auto w-[90%]">
                {fourCards[0]?.variants?.map((num) => (
                    <div key={num} className="relative" onClick={() => router.push(`/productDetail/${num?.id}`)}>
                        <img
                            className="w-[100%] sm:h-full  sm:h-75  object-cover rounded-md"
                            src={num?.mainImage}
                            alt={`Card ${num}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 pb-3 px-1 font-poppins">
                            <div className='bg-[#1B2F1F] bg-opacity-95  h-10 rounded-md p-2 pr-4 w-full'>
                                <div className="flex justify-between items-center">
                                    <div className="flex-grow text-xs mx-auto text-[#D1B87A]">
                                        <p>{num?.name}</p>
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
