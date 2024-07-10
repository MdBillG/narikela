
"use client"
import { useEffect, useState } from "react";
import Banner from "./components/Banner/banner";
import Header from "./components/Header/Header";
import Sale from "./components/Sale/Sale";
import Explore from "./components/Explore/Explore";
import FourCards from "./components/Cards/FourCards";
import AboutUs from "./components/Cards/AboutUs";
import OurUps from "./components/Cards/OurUps";
import VideoBanner from "./components/Banner/VideoBanner";
import Infographic from "./components/Cards/Infographic";
import Blogs from "./components/Cards/Blogs";


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
      <div className="pt-4">
        {screenWidth <= 770 && (<hr />)}
        <Header />
      </div>

      <Banner />
      <Explore />
      <FourCards />
      <AboutUs />
      <OurUps />
      <VideoBanner />
      <Infographic />
      <Blogs />
    </>
  );
}
