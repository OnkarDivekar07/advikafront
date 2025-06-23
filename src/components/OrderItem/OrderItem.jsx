export default function OrderItem({ item }) {
  const { product } = item;

  return (
    <li className="flex items-center py-4">
      <img
        src={product.images?.[0] || "/placeholder.jpg"}
        alt={product.name}
        className="w-16 h-16 object-cover rounded-md mr-4"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-black">{product.name}</h3>
        <p className="text-gray-700">Qty: {item.quantity}</p>
      </div>
      <div className="font-semibold text-black">
        ₹{(product.price * item.quantity).toFixed(2)}
      </div>
    </li>
  );
}
