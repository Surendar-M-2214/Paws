"use client"


import React, { useState } from "react";
import Image from "next/image";
import pic1 from "../../public/assets/images/jordan-1-product-img.jpeg";
import pic2 from "../../public/assets/images/jordan-1-banner-3.png";
import pic3 from "../../public/assets/images/jordan-1-banner-2.png";
import pic4 from "../../public/assets/images/jordan-1-banner.png";
import pic5 from "../../public/assets/images/jordan-1-mid.jpg";
import Link from "next/link";
const  ProductDetails =  (props) => {
console.log(process.env.BASE_URL)
const buy=async()=>{
console.log(quantity);
const price=props.Price;
console.log(price);


}

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("M");
  const [selectedSSD, setSelectedSSD] = useState("256GB");

  const colors = ["M", "S", "L", "XL"];
  const ssdOptions = ["256GB", "512GB", "1TB"];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section: Product Images */}
      <div>
        {/* Main Product Image */}
        <div className="aspect-w-16 aspect-h-[500px] bg-gray-300 flex items-center justify-center rounded-lg">
         <img src={props.Image} alt="main pic" className="w-auto" />
        </div>

        {/* Thumbnail Images */}
        <div className="flex mt-4 space-x-2 overflow-x-auto">
          {[props.Image2,props.Image3,props.Image4].map((_, index) => (
            <div
              key={index}
              className="h-16 w-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center"
            >
              <img src={_} alt="main pic" className="" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex bg-gray-50 border-2 p-10 rounded-lg flex-col space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          {props.name}
        </h1>
        <div className="flex items-center space-x-2 text-yellow-500 text-sm">
          <p>⭐⭐⭐⭐⭐</p>
          <a href="#" className="text-blue-500 underline">
            345 Reviews
          </a>
        </div>
        <p  className="text-sm text-red-500 font-medium">Available Stock : {props.stock}</p>
        <p id="pr" className="text-3xl font-bold text-gray-800">₹ {props.Price}</p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-2">
          <p className="text-gray-700 font-medium">Quantity:</p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-16 border rounded-md px-2 py-1"
          />
        </div>

        {/* Color Selection */}
        <div>
          <p className="font-medium text-gray-700">Colour</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => {setSelectedColor(color)
                  val=colors
                }}
                className={`px-4 py-1 border rounded-full text-sm ${
                  selectedColor === color
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        
        

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link href={{
          pathname: '/Checkout',
          query: {
            q: quantity,
            pr:props.Price,
            clr:selectedColor,
            id:props.id
          }
        }}>
          <button  className="w-full md:w-auto bg-black text-white py-2 px-5 rounded-md hover:bg-gray-700">
          <p className="px-2 text-sm">  Buy Now</p>
          </button>
          </Link>
          <button className="w-full md:w-auto border border-gray-300 text-gray-700  rounded-md hover:bg-gray-100">
          <p className="px-2 text-sm">  Add to Favourites</p>
          </button>
        </div>

        {/* Extra Warranty */}
       {/* Shipping Options */}
       <div>
          <p className="font-medium text-gray-700">Pickup</p>
          <div className="flex flex-col mt-2 space-y-2 text-gray-700">
            <label className="flex items-center">
              <input type="radio" name="pickup" className="mr-2" />
              Shipping - ₹19 (Arrives Nov 17)
            </label>
            <label className="flex items-center">
              <input type="radio" name="pickup" className="mr-2" />
              Pickup from Flowbox - ₹9{" "}
              <a href="#" className="text-blue-500 underline">
                Pick a Flowbox near you
              </a>
            </label>
            <label className="flex items-center text-gray-400">
              <input type="radio" name="pickup" disabled className="mr-2" />
              Pickup from our store (Not available)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
