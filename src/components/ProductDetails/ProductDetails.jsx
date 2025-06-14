import { useState } from 'react';
import PriceTag from '../PriceTag/PriceTag';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import ActionButtons from '../ActionButtons/ActionButtons';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const subtotal = (19.99 * quantity).toFixed(2);

  return (
    <section className="md:w-1/2 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl md:text-4xl text-black max-w-[80%]">Velvet Pink Steering Wheel Sleeves</h1>
          <button onClick={() => alert('Added to wishlist!')} className="text-gray-500 hover:text-[#3DF4A6] text-2xl"><i className="fas fa-heart"></i></button>
        </div>
        <PriceTag />
        <p className="mt-6 text-black leading-relaxed text-base md:text-lg max-w-lg">Add a touch of luxury and comfort to your driving experience with our Velvet Pink Steering Wheel Sleeves...</p>
        <div className="mt-6 text-gray-600 text-sm space-y-1 max-w-lg">
          <h3 className="font-semibold text-black mb-1">Fitment / Specs:</h3>
          <ul className="list-disc list-inside">
            <li>Universal fit for steering wheels 14-15 inches</li>
            <li>Material: Premium velvet fabric</li>
            <li>Color: Velvet Pink</li>
            <li>Easy to install and remove</li>
          </ul>
        </div>
      </div>

      <form className="mt-8 max-w-lg" onSubmit={e => { e.preventDefault(); alert('Added to cart!'); }}>
        <label className="block text-gray-700 mb-2 font-semibold">Quantity</label>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <div className="mt-4 text-black font-bold text-xl">Subtotal: ₹ {subtotal}</div>
        <ActionButtons onBuyNow={() => alert('Proceed to buy')} onAddToCart={() => alert('Added to cart!')} />
      </form>
    </section>
  );
}
