import React from 'react'
import Hero from "./components/Hero"
import LatestProduct from "./components/LatestProducts"
import Storefront from './components/Storefront'
import NewProducts from './components/NewProducts'



export default function page() {
  return (
    <>
    
   <Hero />
   <Storefront />
   <LatestProduct />
   <NewProducts />
 
   </>
  )
}