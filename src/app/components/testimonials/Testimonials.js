import { HOMEBANNER, TESTMIONIALSS } from '@/coconut-oil'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    const test = TESTMIONIALSS.map(x => console.log(x))



    console.log("object", test)
    return (
        <>
            <div className="my-3 mb-7 relative bg-cover bg-[url('/image/benifits/testimonials.png')] py-4">
                <div className='absolute -top-14 sm:-top-20 md:-top-24 lg:-top-28 right-0 z-50 w-20 sm:w-24 md:w-28 lg:w-32'>
                    <img className="h-auto w-full" src="/image/benifits/tcoco.png" alt="Coconut" />
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-[90%] sm:w-[90%] bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl p-4 sm:p-6">
                        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-[#F3EEE1] text-center mb-4 font-cormorant font-semibold italic">
                            CUSTOMERS DIARIES
                        </p>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {TESTMIONIALSS.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center text-[#F3EEE1]">
                                        <p className="font-semibold text-center">{testimonial.name}</p>
                                        <p className="italic mb-4 text-xs sm:text-sm text-center">{testimonial.exp}</p>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 mr-1 text-center">★★★★★</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
