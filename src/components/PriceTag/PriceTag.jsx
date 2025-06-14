export default function PriceTag() {
    return (
      <div className="flex items-center space-x-3 mt-2">
        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded uppercase select-none">Sale</span>
        <span className="line-through text-gray-500 text-lg">₹29.99</span>
        <span className="text-[#3DF4A6] font-extrabold text-2xl">₹19.99</span>
      </div>
    );
  }
  