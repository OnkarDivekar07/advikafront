
import { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Modern Floor Lamp",
      image: "https://placehold.co/300x300?text=Modern+Floor+Lamp",
      alt: "Modern floor lamp with sleek design",
      price: 120,
      quantity: 2,
    },
    {
      id: 2,
      name: "Decorative Vase",
      image: "https://placehold.co/300x300?text=Decorative+Vase",
      alt: "Elegant decorative vase in white",
      price: 80,
      quantity: 1,
    },
  ]);

  function handleQuantityChange(id, quantity) {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function handleRemove(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
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
        {cartItems.length > 0 && <CartSummary items={cartItems} />}
      </main>
    </>
  );
}
