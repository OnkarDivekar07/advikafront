// src/pages/WishlistPage.jsx
import React, { useState } from 'react';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import Navbar from '../../components/Navbar/navbar';
const initialWishlist = [
  {
    id: 1,
    name: "Velvet Pink Steering Wheel Sleeves",
    image: "https://storage.googleapis.com/a1aa/image/d6c2beed-28c0-476c-0ac2-17af87ea2e41.jpg",
    price: 19.99,
    alt: "Velvet Pink Steering Wheel Sleeves",
  },
  {
    id: 2,
    name: "Pink Seat Covers",
    image: "https://storage.googleapis.com/a1aa/image/719b9f61-2aa3-4f4e-c983-a4be6355bc9a.jpg",
    price: 29.99,
    alt: "Pink Seat Covers",
  },
  {
    id: 3,
    name: "Car Air Freshener",
    image: "https://storage.googleapis.com/a1aa/image/67933d78-e91f-4a38-7e2b-a8f9b4dff834.jpg",
    price: 9.99,
    alt: "Car Air Freshener",
  },
  {
    id: 4,
    name: "LED Interior Lights",
    image: "https://storage.googleapis.com/a1aa/image/736a2998-1198-4e2b-762e-5c5cab0d1694.jpg",
    price: 39.99,
    alt: "LED Interior Lights",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    alert(`Added "${item.name}" to cart.`);
    // Optional: Add cart logic here later
  };

  return (
    <>
        <Navbar />
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-20">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={removeFromWishlist}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </main>
    </>
  );
}
