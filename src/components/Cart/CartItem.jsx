export default function CartItem({ item, onQuantityChange, onRemove }) {
    return (
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white rounded-lg shadow p-4">
        <img src={item.image} alt={item.alt} className="w-32 h-32 object-cover rounded" loading="lazy" />
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
          <div className="mt-4 flex items-center space-x-4">
            <label htmlFor={`quantity-${item.id}`} className="font-medium text-gray-700">Quantity:</label>
            <input
              id={`quantity-${item.id}`}
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => onQuantityChange(item.id, Math.max(1, Number(e.target.value)))}
              className="w-16 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3DF4A6]"
              aria-label={`Quantity for ${item.name}`}
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg font-bold text-[#3DF4A6]">${(item.price * item.quantity).toFixed(2)}</p>
          <button
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
            title="Remove item"
          >
            <i className="fas fa-trash-alt fa-lg"></i>
          </button>
        </div>
      </div>
    );
  }
  