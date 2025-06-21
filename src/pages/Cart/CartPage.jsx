import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Update quantity of a specific item
  function handleQuantityChange(id, quantity) {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  // Remove item from cart
  function handleRemove(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        <section className="flex-grow space-y-6" aria-label="Shopping cart items">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))
          )}
        </section>

        {/* Cart Summary */}
        {cartItems.length > 0 && <CartSummary items={cartItems} />}
      </main>
    </>
  );
}
