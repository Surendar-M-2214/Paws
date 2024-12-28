
import {React,Suspense} from 'react'
import Checkout from '../components/Checkout'



function page() {
  return (
    <Suspense>
      <Checkout />
    </Suspense>
    
  )
}

export default page