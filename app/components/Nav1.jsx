"use client"


import {React,useState} from 'react'
import Image from 'next/image'
import logo from '../../public/assets/logo.jpeg'
import Link from 'next/link'
import useCartStore from "../../lib/cartStore";

function Nav1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    {/* Mobile Hamburger Icon */}
    <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-600 rounded-md dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4 lg:hidden">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </div>
        )}
    </div>
    

    
 
</nav>
  )
}

export default Nav1