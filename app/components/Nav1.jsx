"use client"


import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/logo.jpeg'
import Link from 'next/link'
import useCartStore from "../../lib/cartStore";

function Nav1() {
  const cart = useCartStore((state) => state.cart);
  return (
    <nav className="bg-white sticky top-0 shadow-lg shadow-slate-50  z-50 dark:bg-gray-800 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-2">
    <div className="flex items-center justify-between">

      <div className="flex items-center space-x-10">
        
      <Link href="/">
        <div className="flex items-center space-x-0">  
          <Image src={logo} className=' block w-12 '  alt="logo" />
            <span className="block w-auto ml-0 text-2xl font-extrabold h-8 dark:hidden">Tee-Hub</span>
            </div>
            </Link>

        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
          <li>
            <Link href="/" title="" className="flex  text-sm font-medium text-gray-900 hover:text-primary-700 hover:font-semibold hover:underline dark:text-white dark:hover:text-primary-500">
              Home
            </Link>
          </li>
          <li className="shrink-0">
            <Link href="/products" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 hover:font-semibold hover:underline dark:text-white dark:hover:text-primary-500">
              Products
            </Link>
          </li>
          <li className="shrink-0">
            <Link href="/" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 hover:font-semibold hover:underline dark:text-white dark:hover:text-primary-500">
              About us
            </Link>
          </li>
          <li className="shrink-0">
            <Link href="/ " title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 hover:font-semibold hover:underline dark:text-white dark:hover:text-primary-500">
              Contact us
            </Link>
          </li>
          <li className="shrink-0">
            <Link href="/cart " title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 hover:font-semibold hover:underline dark:text-white dark:hover:text-primary-500">
              cart({cart.length})
            </Link>
          </li>
        </ul>
      </div>

   
    </div>

    
  </div>
</nav>
  )
}

export default Nav1