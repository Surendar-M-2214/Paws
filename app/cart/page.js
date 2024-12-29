"use client";

import React from "react";
import useCartStore from "../../lib/cartStore";
import NewProducts from "../components/NewProducts";
import LatestProducts from "../components/LatestProducts";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };




  const handleCheckout = () => {
    // Log or send the cart details

    localStorage.setItem("cart_det", JSON.stringify(cart));
    
  };






  if (cart.length === 0) {
    return (
        <>
      <div className="flex items-center justify-center my-5 h-1/2">
        <h1 className="text-2xl font-bold">Your cart is empty!</h1>
      </div>
         <section className="p-5">
       <LatestProducts />
         </section>
         </>
    );
  }


  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
    

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Cart Items */}
        <div className="col-span-2">
        
           { cart.map((item, index) => (
            
              <div
                key={index}
                className="flex justify-between border-b py-6 group"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-lg font-semibold group-hover:text-gray-500 transition duration-300">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-xl font-bold group-hover:text-gray-600 transition duration-300">
                    ₹{item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))
          }
             <button
                  onClick={() => clearCart()}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg group">
          <h2 className="text-xl font-bold mb-4 group-hover:text-gray-600 transition duration-300">
            Order Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
           
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{(calculateSubtotal()).toFixed(2)}</span>
          </div>
          <Link href={`/Checkout`}><button onClick={handleCheckout} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300">
            Check Out
          </button>
          </Link>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="p-8">
      <NewProducts />
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default CartPage;
