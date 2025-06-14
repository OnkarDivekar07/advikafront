// src/components/WishlistItem.jsx
import React from 'react';

export default function WishlistItem({ item, onRemove, onAddToCart }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-black mb-2">{item.name}</h2>
        <div className="text-[#3DF4A6] font-bold text-xl mb-4">₹{item.price.toFixed(2)}</div>
        <div className="mt-auto flex space-x-3">
          <button
            aria-label={`Add ${item.name} to cart`}
            className="flex-1 bg-black border-2 border-[#3DF4A6] text-white uppercase font-bold py-2 rounded-md hover:bg-[#3DF4A6] hover:text-black btn-hover-glow transition-colors focus:outline-none focus:ring-4 focus:ring-[#3DF4A6] flex items-center justify-center gap-2"
            onClick={() => onAddToCart(item)}
          >
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button
            aria-label={`Remove ${item.name} from wishlist`}
            className="flex-none text-red-600 hover:text-red-800 focus:outline-none"
            title="Remove from Wishlist"
            onClick={() => onRemove(item.id)}
          >
            <i className="fas fa-trash-alt fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
