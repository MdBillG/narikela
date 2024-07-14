import React, { useEffect, useState } from "react";
import IconButton from "../buttons.js/iconButton";

import { useRouter } from "next/navigation";

export default function Content() {
    const [screenWidth, setScreenWidth] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const router = useRouter()



    const handleClick = () => {
        router.push("/plp")
        console.log("clicked")
    }
    return (
        <div className="flex gap-5 pt-1 ">

            <div className="md:block hidden">
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]" onClick={() => router.push("/")}>
                    Home
                </button>
                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)]" onClick={() => router.push("/about")}>
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





            <>

                <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)] sm:hidden block" onClick={handleClick}>
                    Products
                </button >

            </>

        </div>
    );
}
