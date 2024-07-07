"use client"

import React, { useState } from 'react';
import IconButton from '../buttons.js/iconButton';

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='flex flex-col pt-1'>
            {/* Mobile Menu Button */}
            <div className='block sm:hidden'>
                <IconButton
                    className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'
                    handleClick={toggleMenu}
                    icon="fas fa-bars text-[rgb(186,129,75)]"
                >

                </IconButton>
            </div>

            {/* Menu Items */}
            <div className={`sm:flex ${showMenu ? 'flex' : 'hidden'} gap-5`}>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Home</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>About</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Product</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Testimonials</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Contact</h1>
            </div>
        </div>
    );
}
