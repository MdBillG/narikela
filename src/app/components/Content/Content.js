import React, { useEffect, useState } from 'react'
import IconButton from '../buttons.js/iconButton'

export default function Content() {


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
    return (
        <div className='flex gap-5 pt-1'>

            {screenWidth >= 770 && (
                <IconButton icon="fas fa-user text-[rgb(186,129,75)] " />
            )}

            <IconButton icon="fas fa-search text-[rgb(186,129,75)]" />
            <IconButton icon="fas fa-shopping-cart text-[rgb(186,129,75)]" />
        </div>
    )
}
