import React from 'react'

import Image from 'next/image'
import banner from "../../public/assets/banner.jpg"
function Storefront() {
  return (
    <div className="hero bg-white min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <Image
        src={banner}
        alt='offer'
        className="w-auto lg:w-[600px] rounded-lg shadow-2xl shadow-black  ring-2 ring-black ring-offset-4 "/>
      <div className='mx-10'>
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Black Friday 75%</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

        
      </div>
    </div>
  </div>
  )
}

export default Storefront