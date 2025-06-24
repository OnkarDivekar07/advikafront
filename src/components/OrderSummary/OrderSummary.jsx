// components/OrderSummary.jsx
import OrderItem from "../OrderItem/OrderItem";

export default function OrderSummary({ orderItems }) {
  const formatPrice = (num) => `₹${num.toFixed(2)}`;

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-black">Order Summary</h2>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md">
        <ul className="divide-y divide-gray-300 mb-6">
          {orderItems.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between font-bold text-2xl border-t border-gray-400 pt-4">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </section>
  );
}
