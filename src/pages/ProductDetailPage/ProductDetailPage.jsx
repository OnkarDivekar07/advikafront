//productdetailpage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import Navbar from '../../components/Navbar/navbar';

export default function ProductDetailPage() {
  const { id } = useParams(); // 👈 get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`) // 👈 fetch from your backend
      .then(res => setProduct(res.data.data))
      .catch(err => console.error('Failed to load product', err));
  }, [id]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <Breadcrumb />
        <div className="flex flex-col md:flex-row gap-10">
          <ImageGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
        <RelatedProducts currentProductId={id} />
      </main>
    </>
  );
}
