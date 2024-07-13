"use client"

import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'
import IconButton from '../buttons.js/iconButton';
import MobileMenu from '../Mobile-Menu/MobileMenu';

export default function Header() {

    const [screenWidth, setScreenWidth] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false)


    const showMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <div className=' flex justify-between px-5 pt-2'>


            {/* <><h1 className='text-2xl subpixel-antialiased tracking-wide font-medium text-[rgb(186,129,75)] md:block hidden'>Narikela</h1></> */}


            <>
                <div className='pt-2 md:hidden block'>
                    <IconButton
                        handleClick={showMobileMenu}
                        icon=" fas fa-bars text-[rgb(186,129,75)] fa-xl" /></div></>


            {mobileMenu && (
                <MobileMenu setMobileMenu={setMobileMenu} />
            )}
            <h1 className='text-2xl subpixel-antialiased tracking-wide font-bold text-[rgb(186,129,75)] pl-10 k'>Narikela</h1>
            <Content />
        </div>
    )
}
