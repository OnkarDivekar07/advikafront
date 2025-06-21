import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RelatedProducts({ currentProductId }) {
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentProductId) return;
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/${currentProductId}/related`)
      .then((res) => setRelated(res.data))
      .catch((err) => console.error('Failed to fetch related products', err));
  }, [currentProductId]);

  return (
    <section className="mt-16 max-w-7xl mx-auto">
      <h2 className="text-black text-2xl font-bold mb-6">Related Products</h2>
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {related.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            className="min-w-[200px] bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-[#3DF4A6]"
          >
            <img
              src={p.images?.[0]}
              alt={p.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 font-semibold text-center text-black">
              {p.name}
              <div className="text-[#3DF4A6] font-bold mt-1">₹{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
