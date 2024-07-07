"use client"

import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'
import IconButton from '../buttons.js/iconButton';
import MobileMenu from '../Mobile-Menu/MobileMenu';

export default function Header() {

    const [screenWidth, setScreenWidth] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        // Function to update screen width
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Initial screen width on component mount
        updateScreenWidth();

        // Event listener for screen width changes
        window.addEventListener('resize', updateScreenWidth);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    if (screenWidth === null) {
        return null;
    }

    const showMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <div className=' flex justify-between px-5 pt-2'>
            {screenWidth >= 770 && (

                <><h1 className='text-2xl subpixel-antialiased tracking-wide font-medium text-[rgb(186,129,75)] '>Narikela</h1><Navigation /></>
            )}
            {screenWidth <= 770 && (
                <>
                    <div className='pt-2'><IconButton
                        handleClick={showMobileMenu}
                        icon=" fas fa-bars text-[rgb(186,129,75)] fa-xl" /></div></>
            )}

            {mobileMenu && (
                <MobileMenu />
            )}
            {screenWidth <= 770 && (<h1 className='text-2xl subpixel-antialiased tracking-wide font-bold text-[rgb(186,129,75)] pl-10'>Narikela</h1>)}
            <Content />
        </div>
    )
}
