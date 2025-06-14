const products = [
    { name: 'Pink Seat Covers', price: '₹29.99', img: 'https://storage.googleapis.com/a1aa/image/719b9f61-2aa3-4f4e-c983-a4be6355bc9a.jpg' },
    { name: 'Car Air Freshener', price: '₹9.99', img: 'https://storage.googleapis.com/a1aa/image/67933d78-e91f-4a38-7e2b-a8f9b4dff834.jpg' },
  ];
  
  export default function RelatedProducts() {
    return (
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-black text-2xl font-bold mb-6">Related Products</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {products.map((p, index) => (
            <div key={index} className="min-w-[200px] bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-[#3DF4A6]">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4 font-semibold text-center text-black">
                {p.name}
                <div className="text-[#3DF4A6] font-bold mt-1">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  