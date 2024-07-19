import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="relative">
                <div>
                    <img className="h-full" src="/image/blogs/blogbanner.png" alt="" />
                </div>

                <div className="absolute bottom-4 left-24 sm:left-[500px] sm:bottom-24 sm:text-center my-auto bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl h-12 w-56 flex flex-col justify-center items-center sm:h-24 sm:w-72">
                    <p className="text-xs sm:text-xl text-[#F3EEE1]">
                        Experience The Natural Goodness
                    </p>
                    <span className="text-xs sm:text-xl text-[#D1B87A] flex">
                        {" "}
                        <a href="" className="mr-1">
                            {" "}
                            Home
                        </a>{" "}
                        <img
                            className="h-3 sm:h-6 mt-[2px]"
                            src="/image/blogs/blogline.png"
                            alt=""
                        />
                        <a href="" className="ml-1">
                            {" "}
                            Blogs
                        </a>
                    </span>
                </div>
            </div>

            <div className='flex justify-center mx-auto '>
                <div className='flex justify-end w-1/2'>
                    <img className="w-56" src="/image/contact/coconut1.png" alt="" />
                </div>
                <div className='flex flex-col gap-4  w-1/2 justify-center '>
                    <div className='border border-[#593B1F] w-80 drop-shadow-2xl h-10'><p>+91 9148633721</p></div>
                    <div className='border border-[#593B1F] w-80 drop-shadow-2xl h-10'><p>narikela.tiptur@gmail.com</p></div>
                    <div className='border border-[#593B1F] w-80 drop-shadow-2xl'><p>Vinayaka Nagara Tiptur Tumkur district-572201</p></div>
                </div>
            </div>


            <div className='flex justify-center  w-3/4 mx-auto min-h-[500px] bg-[#EBEAD5] my-14'>
                <div className='flex w-2/3  relative just'>
                    <img className="w-full h-[550px] -top-10 absolute" src="/image/contact/coconuttrees.png" alt="" />
                </div>
                <div className='flex flex-col gap-4 w-1/2 justify-center '>
                    <div className=''><p>Let's Get Connected</p></div>
                    <div className='border border-[#593B1F] '><input placeholder=" name : " type="text :" /></div>
                    <div className='border border-[#593B1F] '><input placeholder=" Email - id : " type="text :" /></div>
                    <div className='border border-[#593B1F] '><input placeholder=" Phone Number : " type="text :" /></div>
                    <div className='border border-[#593B1F] '><input placeholder=" Subject : " type="text :" /></div>
                    <div><input placeholder="esx" type="text" /></div>
                </div>
            </div>
        </div>
    );
}

export default Contact
