"use client"
import React, { useEffect, useState } from 'react'
import banner from "@/public/assets/banner.jpg"
import Image from 'next/image'
import Link from 'next/link'


export const dynamic = 'force-dynamic'



const data=await fetch(`${process.env.BASE_URL}/api/products`);
const prod =await data.json();

console.log(prod);

 function LatestProducts() {

  
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Arrivals</h2>
    <div className="carousel carousel-center  rounded-box max-w-full space-x-4 p-4">
  {prod.map((product) => (
<div  key={product.Products.RECID} className='carousel-item'>
<div  className="w-full max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/">
        <img className="p-8 rounded-t-lg" src={product.Products.Image1}  alt="product image" />
    </a>
    <div className="px-5 pb-5">
      
        <div className="flex items-center pb-4 mt-2.5 mb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.Products.Product_Name}</h5>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex h-4 items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">₹ {product.Products.Price}</span>
            <Link href={"/products/"+product.Products.RECID} className="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</Link>
        </div>
    </div>
</div>
</div>
 ))}
</div>
  </div>
  )
}

export default LatestProducts