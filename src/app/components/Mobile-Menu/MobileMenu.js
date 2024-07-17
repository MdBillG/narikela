import React from 'react'
import IconButton from '../buttons.js/iconButton'

export default function MobileMenu({ setMobileMenu }) {

    return (
        <div className=" bg-white  top-0 left-0  z-20 p-2 rounded-lg h-screen w-screen absolute opacity-95">
            <div className="flex flex-col   text-xl subpixel-antialiased text-pri rounded-lg ">

                <a href='/about'>About Us</a>
                <a >Products</a>
                <a href='/blogs'>Blogs</a>
                <a >Contact Us</a>
            </div>
            <div className='absolute top-5 right-5'>
                <IconButton
                    handleClick={() => setMobileMenu(false)}

                    icon=" fas fa-times text-[rgb(186,129,75)] fa-xl" />

            </div>
        </div>
    )
}
