import React from 'react';

export default function BannerGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
      <img
        src="https://placehold.co/600x400?text=Banner+1+Elegant+Vase"
        alt="Decorative vase"
        className="w-full h-auto aspect-[3/2] rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
        loading="lazy"
      />
      <img
        src="https://placehold.co/600x400?text=Banner+2+Cozy+Living+Room"
        alt="Cozy living room"
        className="w-full h-auto aspect-[3/2] rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
        loading="lazy"
      />
    </section>
  );
}
