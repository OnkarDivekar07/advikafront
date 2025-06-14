// components/CartSummary.jsx
import { useNavigate } from 'react-router-dom';



export default function CartSummary({ items }) {
  const navigate = useNavigate();
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.1;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    const handleCheckout = () => {
      navigate("/checkout");
    };
    return (
      <div className="bg-white rounded-lg shadow p-6 sticky top-6 self-start max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Tax (10%)</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-bold text-[#3DF4A6] mb-6">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-[#3DF4A6] text-black font-semibold py-3 rounded hover:bg-[#32c48a] focus:outline-none focus:ring-4 focus:ring-[#32c48a]" aria-label="Proceed to checkout"
         onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
  