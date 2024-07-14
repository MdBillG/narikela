"use client";

import React, { useState } from "react";
import Header from "../components/Header/Header";

import { coconutData } from "@/coconut-oil";
import { useRouter } from "next/navigation";

export default function page() {
    const [product, setProduct] = useState("all");
    const router = useRouter()

    console.log("coconutData", coconutData);

    // Accessing Coconut Oil variants
    const coconutOilVariants = coconutData[0].coconut[0]?.variants?.map(
        (variant) => ({
            mrp: variant.mrp,
            id: variant.id,
            sellingPrice: variant?.sellingPrice,
            mainImage: variant?.mainImage,
        })
    );

    const DesssicatePowder = coconutData[0].DesssicatePowder[0]?.variants?.map(
        (variant) => ({
            mrp: variant.mrp,
            id: variant.id,
            mainImage: variant?.image,
        })
    );

    console.log("DesssicatePowder", DesssicatePowder);

    const coconutOilImages = coconutData[0]?.coconut[0]?.variants?.map(
        (variant) => {
            if (typeof variant.image === "string") {
                return variant.image; // Handle the case where image is a string URL directly
            } else if (Array.isArray(variant.image)) {
                return variant.image[0]?.oil; // Extract the oil image URL from the image array
            } else {
                return null; // Handle other cases if necessary
            }
        }
    );

    console.log(coconutOilImages);

    console.log("coconutOilVariants", coconutOilVariants);

    const data =
        product === "all"
            ? [...coconutOilVariants, ...DesssicatePowder]
            : product === "coconutOilVariants"
                ? coconutOilVariants
                : DesssicatePowder;

    console.log("data", data);

    return (
        <div>
            <div className="flex flex-row gap-4">
                <button onClick={() => setProduct("all")}>all</button>
                <button onClick={() => setProduct("coconutOilVariants")}>oil</button>
                <button onClick={() => setProduct("DesssicatePowder")}>powder</button>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-4 mx-1 gap-2 ">
                {data?.map((variant, index) => (
                    <div key={variant.id} className=" border-b border-b-black shadow-2xl rounded-lg" style={{
                        borderRight: index % 2 === 0 ? '0.5px solid black' : 'none',

                        borderLeft: index % 2 !== 0 ? '0.5px solid black' : 'none',


                    }}
                        onClick={() => router.push(`/productDetail/${variant.id}`)}>
                        <img src={variant.mainImage} alt="" className="rounded-lg" />
                        <p>MRP: {variant.mrp}</p>
                        <p>ID: {variant.id}</p>

                    </div>
                ))}
            </div>

        </div>
    );
}
