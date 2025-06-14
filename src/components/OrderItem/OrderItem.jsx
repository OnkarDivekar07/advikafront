// components/OrderItem.jsx
export default function OrderItem({ item }) {
    const formatPrice = (num) => `₹${num.toFixed(2)}`;
  
    return (
      <li className="flex items-center py-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div className="flex-1">
          <h3 className="font-semibold text-black">{item.name}</h3>
          <p className="text-gray-700">Qty: {item.quantity}</p>
        </div>
        <div className="font-semibold text-black">{formatPrice(item.price * item.quantity)}</div>
      </li>
    );
  }
  