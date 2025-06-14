import React, { useState, useEffect } from 'react';

export default function SlidingBanner() {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/banner`);
        const data = await response.json();
        setBanners(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  useEffect(() => {
    if (isPaused || banners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div
        className="relative overflow-hidden rounded-lg aspect-[3/2] sm:aspect-[16/6] bg-gray-200"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.imageUrl}
            alt={banner.alt || `Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex
                  ? 'bg-[#3DF4A6]'
                  : 'bg-white/50 hover:bg-[#3DF4A6]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
