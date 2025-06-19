import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

export default function Categories() {
  const categories = ["Truck", "Tempo", "Pickup", "Car", "Two Wheeler", "Tractor"];
  
  const [productsData, setProductsData] = useState({});
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
        const products = res.data.data;

        // Group by category
        const grouped = {};
        categories.forEach(c => (grouped[c] = []));
        products.forEach(prod => {
          prod.category.forEach(cat => {
            if (grouped[cat]) grouped[cat].push(prod);
          });
        });

        setProductsData(grouped);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Debounced hover change
  const handleCategoryHover = (cat) => {
    if (cat === activeCategory) return;
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setFade(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveCategory(cat);
        setFade(true);
      }, 300);
    }, 150);
  };

  const handleKeyDown = (e) => {
    const idx = categories.indexOf(activeCategory);
    if (e.key === "ArrowRight") {
      setActiveCategory(categories[(idx + 1) % categories.length]);
      setFade(true);
    }
    if (e.key === "ArrowLeft") {
      setActiveCategory(categories[(idx - 1 + categories.length) % categories.length]);
      setFade(true);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const currentProducts = productsData[activeCategory] || [];

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-8"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Vehicle categories section, use arrow keys to navigate"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 select-none">
        Vehicle Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8" role="tablist">
        {categories.map(cat => (
          <button
            key={cat}
            onMouseEnter={() => handleCategoryHover(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3DF4A6] ${
              activeCategory === cat
                ? "bg-[#3DF4A6] text-black"
                : "bg-gray-300 text-gray-700 hover:bg-[#3DF4A6] hover:text-black"
            }`}
            role="tab"
            aria-selected={activeCategory === cat}
            tabIndex={activeCategory === cat ? 0 : -1}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
        {currentProducts.map(prod => (
          <ProductCard key={prod.id} product={{
            id: prod.id,
            name: prod.name,
            image: prod.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image',
            alt: prod.name,
            price: prod.price
          }} />
        ))}
      </div>

      {currentProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No products found in this category.</p>
      )}
    </section>
  );
}
