import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function Categories() {
  const categories = [
    "Truck",
    "Tempo",
    "Pickup",
    "Car",
    "Two Wheeler",
    "Tractor",
  ];

  const productsData = {
    Truck: [
      { id: 1, name: "Heavy Duty Truck", image: "https://placehold.co/300x200?text=Heavy+Duty+Truck", alt: "Heavy duty truck", price: 25000 },
      { id: 2, name: "Cargo Truck", image: "https://placehold.co/300x200?text=Cargo+Truck", alt: "Cargo truck", price: 22000 },
    ],
    Tempo: [
      { id: 3, name: "Mini Tempo", image: "https://placehold.co/300x200?text=Mini+Tempo", alt: "Mini tempo", price: 15000 },
      { id: 4, name: "Tempo Traveller", image: "https://placehold.co/300x200?text=Tempo+Traveller", alt: "Tempo traveller", price: 18000 },
    ],
    Pickup: [
      { id: 5, name: "Pickup Truck", image: "https://placehold.co/300x200?text=Pickup+Truck", alt: "Pickup truck", price: 20000 },
      { id: 6, name: "Small Pickup", image: "https://placehold.co/300x200?text=Small+Pickup", alt: "Small pickup", price: 17000 },
    ],
    Car: [
      { id: 7, name: "Sedan Car", image: "https://placehold.co/300x200?text=Sedan+Car", alt: "Sedan car", price: 22000 },
      { id: 8, name: "SUV Car", image: "https://placehold.co/300x200?text=SUV+Car", alt: "SUV car", price: 28000 },
    ],
    "Two Wheeler": [
      { id: 9, name: "Motorbike", image: "https://placehold.co/300x200?text=Motorbike", alt: "Motorbike", price: 5000 },
      { id: 10, name: "Scooter", image: "https://placehold.co/300x200?text=Scooter", alt: "Scooter", price: 3000 },
    ],
    Tractor: [
      { id: 11, name: "Farm Tractor", image: "https://placehold.co/300x200?text=Farm+Tractor", alt: "Farm tractor", price: 35000 },
      { id: 12, name: "Compact Tractor", image: "https://placehold.co/300x200?text=Compact+Tractor", alt: "Compact tractor", price: 32000 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Debounced hover handler
  function handleCategoryHover(category) {
    if (category === activeCategory) return;
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setFade(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveCategory(category);
        setFade(true);
      }, 300);
    }, 150);
  }

  // Keyboard nav
  function handleKeyDown(e) {
    const idx = categories.indexOf(activeCategory);
    if (e.key === "ArrowRight") {
      setActiveCategory(categories[(idx + 1) % categories.length]);
      setFade(true);
    }
    if (e.key === "ArrowLeft") {
      setActiveCategory(categories[(idx - 1 + categories.length) % categories.length]);
      setFade(true);
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

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

      {/* Category Buttons */}
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

      {/* Product Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {productsData[activeCategory].map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}
