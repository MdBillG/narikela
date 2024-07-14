import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <>


            <footer>
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:text-center bg-[#166534] text-white">
                    <div className="">
                        <p>
                            Narikela, from Tiptur since 1954, offers premium cold-pressed
                            coconut oil. We honor tradition with quality, supporting local
                            farmers and sustainable practices.
                        </p>
                    </div>
                    <div className="flex flex-col">

                        <a href="/about" className="hover:text-green-300">
                            About Us
                        </a>

                        <a href="/products" className="hover:text-green-300">
                            Products
                        </a>

                        <a href="/blogs" className="hover:text-green-300">
                            Blogs
                        </a>

                        <a href="/contact" className="hover:text-green-300">
                            Contact Us
                        </a>
                    </div>
                    <div>
                        <p>9148633721</p>
                        <p>narikela.tiptur@gmail.com</p>
                        <p>Vinayaka Nagara, Tiptur Tumkur district-572201</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
