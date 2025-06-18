import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchNewArrivals = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/banner/new-arrivals`);
      if (Array.isArray(res.data.data)) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch new arrivals:', error);
    }
  };

  useEffect(() => {
    fetchNewArrivals();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No new arrivals found.</p>;
  }

  return (
    <section className="w-full max-w-md mx-auto px-4 py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">New Arrivals</h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full">
              <ProductCard
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images?.[0] || 'https://via.placeholder.com/300x300?text=No+Image',
                  alt: product.name,
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-700 rounded-full shadow w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center z-10 hover:bg-[#3DF4A6] hover:text-white"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-700 rounded-full shadow w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center z-10 hover:bg-[#3DF4A6] hover:text-white"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-[#3DF4A6]' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
