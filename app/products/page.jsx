

"use client"
import {React,useEffect,useState} from 'react'
import useSWR from 'swr'
import Prodlist from '../components/Prodlist'


const fetcher = (url) => fetch(url).then((r) => r.json())


export default   function page() {
 
  const { data, error, isLoading } = useSWR(
    `${process.env.BASE_URL}api/products`,
    fetcher
  )
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
        //  const [post,setPost]=useState([]);
        //  useEffect(()=>{
        //  fetch(`http://localhost:3000/api/products`)
        //  .then((res)=>res.json())
        //  .then(res => setPost(res))
        //  },[]);

console.log(data);
  return (
   <>
   <div className="w-full py-5 ">
    <div className="container mx-auto">
   
    <h2 className="text-4xl font-bold py-5 tracking-tight text-gray-900">Products </h2>

      <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
   {data.map((pr)=>(
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



