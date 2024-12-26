"use client"

import {React,useEffect,useState} from 'react'
import ProductDetails from '../../components/ProductDetails';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())
export default  function Page({ params}) {
  const [id, setId] = useState(null);
 
  useEffect(() => {
    // Resolve the `params` promise
    (async () => {
      const resolvedParams = await params; // Await params here
      setId(resolvedParams.id);
    })();
  }, [params]);


const { data, error, isLoading } = useSWR(
  `${process.env.BASE_URL}api/products/${id}`,
  fetcher
)

if (isLoading) return <div>Loading...</div>
if (error) return <div>Error: {error.message}</div>
  
  return( 
  <>
  {data.map((res)=>
    <ProductDetails
    id={res.Products.RECID}
    key={res.Products.RECID}
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