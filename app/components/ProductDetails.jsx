"use client"


import React, { useState } from "react";
import Image from "next/image";
import pic1 from "../../public/assets/images/jordan-1-product-img.jpeg";
import pic2 from "../../public/assets/images/jordan-1-banner-3.png";
import pic3 from "../../public/assets/images/jordan-1-banner-2.png";
import pic4 from "../../public/assets/images/jordan-1-banner.png";
import pic5 from "../../public/assets/images/jordan-1-mid.jpg";
const ProductDetails = ({params}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Green");
  const [selectedSSD, setSelectedSSD] = useState("256GB");

  const colors = ["Green", "Pink", "Silver", "Blue"];
  const ssdOptions = ["256GB", "512GB", "1TB"];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section: Product Images */}
      <div>
        {/* Main Product Image */}
        <div className="aspect-w-16 aspect-h-[500px] bg-gray-300 flex items-center justify-center rounded-lg">
         <Image src={pic1} alt="main pic" className="" />
        </div>

        {/* Thumbnail Images */}
        <div className="flex mt-4 space-x-2 overflow-x-auto">
          {[pic2,pic3,pic4,pic5].map((_, index) => (
            <div
              key={index}
              className="h-16 w-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center"
            >
              <Image src={_} alt="main pic" className="" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex bg-gray-50 border-2 p-10 rounded-lg flex-col space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM
        </h1>
        <div className="flex items-center space-x-2 text-yellow-500 text-sm">
          <p>⭐⭐⭐⭐⭐</p>
          <a href="#" className="text-blue-500 underline">
            345 Reviews
          </a>
        </div>
        <p className="text-sm text-red-500 font-medium">The last 2 products</p>
        <p className="text-3xl font-bold text-gray-800">$1,249.99</p>

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
                onClick={() => setSelectedColor(color)}
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

        {/* SSD Selection */}
        <div>
          <p className="font-medium text-gray-700">SSD Capacity</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {ssdOptions.map((ssd) => (
              <button
                key={ssd}
                onClick={() => setSelectedSSD(ssd)}
                className={`px-4 py-1 border rounded-full text-sm ${
                  selectedSSD === ssd
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {ssd}
              </button>
            ))}
          </div>
        </div>

        {/* Shipping Options */}
        <div>
          <p className="font-medium text-gray-700">Pickup</p>
          <div className="flex flex-col mt-2 space-y-2 text-gray-700">
            <label className="flex items-center">
              <input type="radio" name="pickup" className="mr-2" />
              Shipping - $19 (Arrives Nov 17)
            </label>
            <label className="flex items-center">
              <input type="radio" name="pickup" className="mr-2" />
              Pickup from Flowbox - $9{" "}
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

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="w-full md:w-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
          <button className="w-full md:w-auto border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100">
            Add to Favorites
          </button>
        </div>

        {/* Extra Warranty */}
        <div>
          <p className="font-medium text-gray-700">Add extra warranty</p>
          <div className="flex flex-col mt-2 space-y-2 text-gray-700">
            <label className="flex items-center">
              <input type="radio" name="warranty" className="mr-2" />
              1 year - $39
            </label>
            <label className="flex items-center">
              <input type="radio" name="warranty" className="mr-2" />
              2 years - $69
            </label>
            <label className="flex items-center">
              <input type="radio" name="warranty" className="mr-2" />
              3 years - $99
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
