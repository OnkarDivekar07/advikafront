import { useState } from 'react';

export default function ImageGallery() {
  const [mainImage, setMainImage] = useState("https://storage.googleapis.com/a1aa/image/d6c2beed-28c0-476c-0ac2-17af87ea2e41.jpg");

  const thumbnails = [
    "https://storage.googleapis.com/a1aa/image/3b9e7c21-bfd9-4e33-5664-a2822ec2b4f3.jpg",
    "https://storage.googleapis.com/a1aa/image/cb363b07-43d6-4923-a779-833d5e752a61.jpg",
    "https://storage.googleapis.com/a1aa/image/4bcddaa1-6372-4b04-2db2-3c5a97967f12.jpg",
  ];

  return (
    <section className="md:w-1/2 flex flex-col">
      <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center h-[400px] md:h-[500px]">
        <img src={mainImage} alt="Main product" className="max-h-full max-w-full object-contain rounded-lg" />
      </div>
      <div className="thumbs mt-4 flex space-x-4 overflow-x-auto md:overflow-x-visible md:space-x-6">
        {thumbnails.map((thumb, index) => (
          <button key={index} onClick={() => setMainImage(thumb)} className="flex-shrink-0 w-20 h-20 rounded-lg bg-gray-200 p-1 border-2 border-transparent hover:border-[#3DF4A6]">
            <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          </button>
        ))}
      </div>
    </section>
  );
}
