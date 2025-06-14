import { useState } from 'react';

export default function QuantitySelector({ quantity, setQuantity }) {
  const increaseQty = () => setQuantity(qty => qty + 1);
  const decreaseQty = () => setQuantity(qty => Math.max(1, qty - 1));

  return (
    <div className="flex items-center space-x-4 max-w-xs">
      <button onClick={decreaseQty} className="bg-gray-300 text-black px-4 py-2 rounded-l-md hover:bg-[#3DF4A6]">-</button>
      <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Math.max(1, +e.target.value))} className="w-20 text-center bg-gray-100 text-black text-lg font-semibold" />
      <button onClick={increaseQty} className="bg-gray-300 text-black px-4 py-2 rounded-r-md hover:bg-[#3DF4A6]">+</button>
    </div>
  );
}
