
"use client"
import { useEffect, useState } from "react";
import Banner from "./components/Banner/banner";
import Header from "./components/Header/Header";
import Sale from "./components/Sale/Sale";


export default function Home() {
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
    <>
      <Sale />
      <Header />
      <div className="pt-4">
        {screenWidth <= 770 && (<hr />)}

      </div>

      <Banner />
    </>
  );
}
