import React from 'react'
import Prodlist from '../components/Prodlist'

export default async function page() {
 
    const data=await fetch(`https://zoho-creator-872934080.development.catalystserverless.com/products`);
const prod =await data.json();

console.log(prod);
  return (
   <>
   {prod.map((pr)=>(
    <Prodlist
  name={pr.Products.Product_Name}
    />
   ))}
   
   </>
  )
}



