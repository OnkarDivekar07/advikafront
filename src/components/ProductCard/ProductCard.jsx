import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
      tabIndex={0}
      aria-label={`${product.name}, priced at $${product.price}`}
      onClick={() => navigate('/product')}  // <-- attach it here
    >
      <img src={product.image} alt={product.alt} className="w-full h-64 object-cover" loading="lazy" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="mt-auto text-xl font-bold text-[#3DF4A6]">${product.price}</div>
      </div>
    </div>
  );
}
