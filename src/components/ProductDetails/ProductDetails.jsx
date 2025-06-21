//productdetails.jsx
import { useState } from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import ActionButtons from '../ActionButtons/ActionButtons';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const subtotal = (product.price * quantity).toFixed(2);
  const navigate = useNavigate();

  return (
    <section className="md:w-1/2 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl md:text-4xl text-black">{product.name}</h1>
          <button onClick={() => alert('Added to wishlist!')} className="text-gray-500 hover:text-[#3DF4A6] text-2xl">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="text-3xl  font-bold text-[#3DF4A6] mt-4">₹ {product.price}</div>
<div className="mt-4" dangerouslySetInnerHTML={{ __html: product.description }}></div>
      </div>

      <form className="mt-8 max-w-lg" onSubmit={e => { e.preventDefault(); alert('Added to cart!'); }}>
        <label className="block text-gray-700 mb-2 font-semibold">Quantity</label>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <div className="mt-4 text-black font-bold text-xl">Subtotal: ₹ {subtotal}</div>
      <ActionButtons 
  onBuyNow={() => navigate('/checkout')}
  onAddToCart={() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex >= 0) {
      // Update quantity
      cart[existingIndex].quantity += quantity;
    } else {
      // Add new item
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.images?.[0] || '', // optional: for preview in cart
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    navigate('/cart')
  }}
/>
      </form>
    </section>
  );
}
