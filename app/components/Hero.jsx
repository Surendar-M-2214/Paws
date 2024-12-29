import React from 'react'

import Image from 'next/image'
import model from "../../public/assets/model.webp"
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="order-1 mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Street Wears</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="/products" className="inline-flex  px-5 py-3 items-center justify-center text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
             See Products
            </a> 
        </div>
        <div className="w-auto mb-20 mt-10 order-2 lg:mt-0 lg:col-span-5 lg:flex lg:w-[500px] shadow-2xl shadow-black rounded-tl-3xl rounded-br-3xl ring-2 ring-black ring-offset-4 ">
           <Image src={model} alt='banner' className=' rounded-tl-3xl rounded-br-3xl '/>
        </div>                
    </div>
</section>
  )
}

export default Hero