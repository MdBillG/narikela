"use client"

import Header from '@/app/components/Header/Header';
import React, { useEffect, useState } from 'react'
import { coconutData } from "@/coconut-oil";



export default function page() {

    const [screenWidth, setScreenWidth] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false)

    console.log("dsfadsa", coconutData)

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
    return (
        <div>
            <div className="pt-4">
                {screenWidth <= 770 && (<hr />)}
                <Header />
            </div>
        </div>
    )
}
