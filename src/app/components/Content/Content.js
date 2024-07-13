import React, { useEffect, useState } from "react";
import IconButton from "../buttons.js/iconButton";

import { useRouter } from "next/navigation";

export default function Content() {
    const [screenWidth, setScreenWidth] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const router = useRouter()

    useEffect(() => {
        // Function to update screen width
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Initial screen width on component mount
        updateScreenWidth();

        // Event listener for screen width changes
        window.addEventListener("resize", updateScreenWidth);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);

    if (screenWidth === null) {
        return null;
    }

    const handleClick = () => {
        router.push("/plp")
        console.log("clicked")
    }
    return (
        <div className="flex gap-5 pt-1">

            <div className="md:block hidden">
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]">
                    Home
                </button>
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]" >
                    About
                </button>
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]" onClick={handleClick}>
                    Products
                </button>
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]">
                    Testimonials
                </button>
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]">
                    Contact
                </button>
                <IconButton icon="fab fa-facebook text-[rgb(186,129,75)] fa-xl" />
                <IconButton icon="fab fa-instagram text-[rgb(186,129,75)] fa-xl" />

            </div>




            {screenWidth <= 770 && (
                <>

                    <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]" onClick={handleClick}>
                        Products
                    </button >

                </>
            )}
        </div>
    );
}
