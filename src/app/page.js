
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


  return (
    <>
      <Sale />
      <div className="pt-4">

        <Header />

        <hr className="md:hidden block" />
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
