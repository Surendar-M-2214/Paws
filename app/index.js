import React from 'react';

const ProductPlaceholder = () => (
  <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center space-y-4">
    <div className="w-full h-48 bg-gray-300 rounded-md animate-pulse"></div>
    <div className="w-3/4 h-6 bg-gray-300 rounded-sm animate-pulse"></div>
    <div className="w-1/2 h-6 bg-gray-300 rounded-sm animate-pulse"></div>
    <button className="w-full bg-gray-300 text-gray-300 py-2 rounded-md animate-pulse">
      Add to Cart
    </button>
  </div>
);

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <ProductPlaceholder key={index} />
          ))}
        </div>
      </div>

      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600">© 2024 Product Store. All rights reserved.</p>
      </footer>
    </div>
  );
}