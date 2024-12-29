
"use client"
import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

    
    const fetcher = (url) => fetch(url).then((r) => r.json())
      export default function NewProducts() {


        const { data, error, isLoading } = useSWR(
          `${process.env.BASE_URL}api/products`,
          fetcher
        )
       
        if (isLoading) return <div>Loading...</div>
        if (error) return <div>Error: {error.message}</div>
const newpost=data.slice(0,4);

        return (
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      
              <div className="carousel mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {newpost.map((product) => (
                  <Link href={"/products/"+product.Products.RECID}>
                  <div key={product.Products.RECID} className=" shadow hover:scale-105 transition-transform duration-300 group relative">
                    <img
                      alt={product.Products.Product_Name}
                      src={product.Products.Image1}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover  group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.Products.Product_Name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{product.Products.Price}</p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      }
      
  