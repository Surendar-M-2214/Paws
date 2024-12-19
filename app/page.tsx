import React from 'react'
import Hero from "@/app/components/Hero"
import LatestProduct from "@/app/components/LatestProducts"
import Storefront from '@/app/components/Storefront'
import NewProducts from '@/app/components/NewProducts'
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