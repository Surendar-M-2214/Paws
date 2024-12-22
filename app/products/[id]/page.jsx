import React from 'react'
import ProductDetails from '../../components/ProductDetails';
export default async function Page({ params }) {
  // http://localhost:3000/api/products/4714602000000037011
  const id = (await params).id;
  const data=(await fetch(`${process.env.BASE_URL}/api/products/${id}`));
  const prod =await data.json();
  
  return( 
  <>
  {prod.map((res)=>
    <ProductDetails
    id={res.Products.RECID}
    
    size={res.Products.Size}
    name={res.Products.Product_Name}
    Image={res.Products.Image1}
    Image2={res.Products.Image2}
    Image3={res.Products.Image3}
    Image4={res.Products.Image4}
    Price={res.Products.Price}
    stock={res.Products.Stock_Avail}
    />)}
  
  </>
  )
}