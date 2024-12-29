'use client'

import {React, useState,useEffect} from 'react'
import { useSearchParams } from 'next/navigation'


export default    function Checkout() {

  const[prod,setProd]=useState([]);
  const [errors, setErrors] = useState({});
  const [total, setTotal] = useState(0);
      
const [formData, setFormData] = useState({
  name: "",
  email: "",
  address: "",
  number:""
});


const [loading, setLoading] = useState(false);
const [paymentLink, setPaymentLink] = useState(null);
  useEffect(() => {
    const cdet = localStorage.getItem("cart_det"); 
    if (cdet) {
      const cartDetails = JSON.parse(cdet); 
      setProd(cartDetails);

      // Calculate the total price
      const totalPrice = cartDetails.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotal(totalPrice); 
    }
  }, []);




  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.address) {
      newErrors.address = 'Address is required';
    }

    if (!formData.number) {
      newErrors.number = 'Phone number is required';
    } else if (formData.number.length !== 10) {
      newErrors.number = 'Phone number must be 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };







const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }
 

  const submitForm = async (e) => {

    e.preventDefault()

    if (!validateForm()) {
      return;
    }



    const formURL = `${process.env.BASE_URL}api/razor`
    const data = new FormData()

    const cr_data=[];
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })
    data.append("amount",total-500);
  
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
         'Access-Control-Allow-Origin':'*'
      },    
    })
    .then(async (res) => {
      setLoading(true);
        const det = await res.json();
console.log(JSON.stringify(det,null,2));
        if (det?.link) {
          // Redirect user to the Razorpay payment link
         
          window.location.href = det.link;
        } else {

          alert('Error generating payment link');
        }
        prod.forEach((product) => {
          // Add formData to each product object
          const  pay_id=det.id;
                
          const productWithFormData = {
            ...product,
            name: formData.name,
            email: formData.email,
            address: formData.address,
            number: formData.number,
            PAY_LINK_ID:pay_id
          };
          console.log(JSON.stringify(productWithFormData));
        
          // Add each product with formData as a JSON string in the array
          cr_data.push(productWithFormData); 
        });

        fetch(`api/creator`, {
                    mode: 'cors',
                    method: "POST",
                    body:JSON.stringify(cr_data),
                    headers: {
                      'accept': 'application/json',
                      'Access-Control-Allow-Origin':'*'
                    }
                  }
                  ).then(async(rec)=>{
          
                    const creator_resp= await rec.json()
                    console.log(JSON.stringify(creator_resp,null,2))
                 
                  })

      })
    .catch( (error) =>{
        console.error('Error:', error);
        alert('Failed to create payment link');
        setLoading(false);
      }) 
     
    
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
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label for="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your Email* </label>
              <input type="email" name="email" onChange={handleInput} value={formData.email}  id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>



            <div>
              <label for="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Address </label>
              <textarea type="text" name="address" onChange={handleInput} value={formData.address} id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" required />
              {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
      
            </div>

            <div>
              <label for="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone number </label>
              <input type="number" name="number" onChange={handleInput} value={formData.number} id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="9874561230" required />
              {errors.number && <p className="text-sm text-red-500 mt-1">{errors.number}</p>}
            </div>

          
          </div>
        </div>

       

       
      </div>

      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Price</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">{total}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Discount</dt>
              <dd className="text-base font-medium text-red-500">-500</dd>
            </dl>

           

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">₹{total-500}</dd>
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

