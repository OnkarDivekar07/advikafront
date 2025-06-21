import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const increment = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const decrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white rounded-lg shadow p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover rounded"
        loading="lazy"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-1">₹ {item.price.toFixed(2)}</p>
        
        <div className="mt-4 flex items-center space-x-2">
          <label className="font-medium text-gray-700">Quantity:</label>
          
          <button
            onClick={decrement}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-xl rounded"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className="px-3 font-semibold">{item.quantity}</span>

          <button
            onClick={increment}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-xl rounded"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg font-bold text-[#3DF4A6]">
          ₹ {(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
          title="Remove item"
        >
<FontAwesomeIcon icon={faTrashAlt} size="lg" />
        </button>
      </div>
    </div>
  );
}
