'use client'

import {React, useState, Suspense} from 'react'
import { useSearchParams } from 'next/navigation'
export default   function Checkout() {
    <Suspense>
    const searchParams = useSearchParams()
    const price=searchParams.get('pr');
 const  qty=searchParams.get('q');
  const total=qty*price;
  const  size=searchParams.get('clr');

const id=searchParams.get('id');
</Suspense>
const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    number:""
  });


  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);

const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = `/api/razor`
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })
    data.append("amount",total);
  
    data.append("size",size);
    data.append("id",id);
    data.append("qty",qty);
    
console.log(data);
    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
      
    }).then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (data?.link) {
          // Redirect user to the Razorpay payment link
         
          window.location.href = data.link;
        } else {
          alert('Error generating payment link');
        }})
    .catch( (error) =>{
        console.error('Error:', error);
        alert('Failed to create payment link');
      }) 
      .finally (()=>{
        setLoading(false);
      }
      )

      fetch(`/api/creator`, {
        method: "POST",
        body: data,
        headers: {
          'accept': 'application/json',
        }
    }
    )
    
  }






  return (
  <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form   className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Checkout
        </span>
      </li>

      <li className="flex shrink-0 items-center">
        <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Order summary
      </li>
    </ol>

    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label for="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
              <input type="text" name="name" onChange={handleInput} value={formData.name} id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
            </div>

            <div>
              <label for="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your Email* </label>
              <input type="email" name="email" onChange={handleInput} value={formData.email}  id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
            </div>



            <div>
              <label for="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Address </label>
              <textarea type="text" name="address" onChange={handleInput} value={formData.address} id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" required />
            </div>

            <div>
              <label for="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone number </label>
              <input type="number" name="number" onChange={handleInput} value={formData.number} id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="9874561230" required />
            </div>

          
          </div>
        </div>

       

       
      </div>

      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Price</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">{price}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Quantity</dt>
              <dd className="text-base font-medium text-green-500">{qty}</dd>
            </dl>

           

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">{total}</dd>
            </dl>
            <button type='submit' onClick={submitForm} disabled={loading} className="text-white bg-black py-3 px-14 hover:bg-gray-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {loading ? 'Generating Payment Link...' :   `Buy Now`}
                </button>
           
          </div>



        </div>
        

       
      </div>

      {paymentLink && <p>Payment link: <a href={paymentLink} target="_blank" rel="noopener noreferrer">Click here</a></p>}

    </div>

  </form>
</section>
  )
}

