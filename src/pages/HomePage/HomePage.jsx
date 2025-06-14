import React from 'react';
import Navbar       from '../../components/Navbar/navbar';
import SlidingBanner from '../../components/Banners/SlidingBanner';
import NewArrivals  from '../../components/NewArrivals/NewArrivals';
import Categories   from '../../components/Categories/Categories';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SlidingBanner />
      <NewArrivals />
      <Categories />
    </>
  );
}
