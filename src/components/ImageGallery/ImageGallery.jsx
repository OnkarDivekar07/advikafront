import { useState } from 'react';

export default function ImageGallery({ images = [] }) {
  const [mainImage, setMainImage] = useState(images[0] || '');

  if (!images.length) return null;

  return (
    <section className="md:w-1/2 flex flex-col">
      <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center h-[400px] md:h-[500px]">
        <img src={mainImage} alt="Main product" className="max-h-full max-w-full object-contain rounded-lg" />
      </div>
      <div className="thumbs mt-4 flex space-x-4 overflow-x-auto md:space-x-6">
        {images.map((thumb, index) => (
          <button key={index} onClick={() => setMainImage(thumb)} className="w-20 h-20 rounded-lg bg-gray-200 p-1 border-2 hover:border-[#3DF4A6]">
            <img src={thumb} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          </button>
        ))}
      </div>
    </section>
  );
}
