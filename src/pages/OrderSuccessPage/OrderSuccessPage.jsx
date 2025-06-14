import React from 'react';
import { Link } from 'react-router-dom';
import SuccessCheckmark from '../../components/SuccessCheckmark/SuccessCheckmark';

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-white">
      <SuccessCheckmark />
      <h1 className="text-4xl font-bold text-[#3DF4A6] mb-4">Order Successfully Placed!</h1>
      <p className="text-lg text-gray-700 max-w-md text-center mb-8">
        Thank you for your order. We are processing it and will update you shortly.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#3DF4A6] text-black font-bold uppercase py-3 px-8 rounded-md hover:bg-black hover:text-[#3DF4A6] btn-hover-glow transition-colors focus:outline-none focus:ring-4 focus:ring-[#3DF4A6]"
      >
        Continue Shopping
      </Link>
    </main>
  );
}
