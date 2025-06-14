export default function ActionButtons({ onBuyNow, onAddToCart }) {
    return (
      <div className="mt-8 flex flex-col gap-4 max-w-lg w-full">
        <button onClick={onBuyNow} className="bg-[#3DF4A6] text-black uppercase font-bold py-4 rounded-md w-full hover:bg-black hover:text-[#3DF4A6] btn-hover-glow">Buy It Now</button>
        <button onClick={onAddToCart} className="bg-black border-2 border-[#3DF4A6] text-white uppercase font-bold py-4 rounded-md w-full hover:bg-[#3DF4A6] hover:text-black btn-hover-glow">Add to Cart</button>
      </div>
    );
  }
  