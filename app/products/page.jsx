import React from 'react'
import Prodlist from '../components/Prodlist'

export const revalidate = 60;



export default  async function page() {
  const data=await fetch(`http://localhost:3000/api/products`);
  const prod =await data.json();

// console.log(prod);
  return (
   <>
   <div className="w-full py-5 ">
    <div className="container mx-auto">
   
    <h2 className="text-4xl font-bold py-5 tracking-tight text-gray-900">Products </h2>

      <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
   {prod.map((pr)=>(
    <Prodlist
    id={pr.Products.RECID}
    key={pr.Products.RECID}
  name={pr.Products.Product_Name}
  description={pr.Products.Description}
  img={pr.Products.Image1}
  Price={pr.Products.Price}
    />
   ))}
   </div>
    </div>
  </div>
  </div>
   </>
  )
}



