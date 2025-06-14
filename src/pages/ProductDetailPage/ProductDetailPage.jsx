import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import Navbar from '../../components/Navbar/navbar';
export default function ProductPage() {
  return (
        <>
        <Navbar />
    <main className="max-w-7xl mx-auto p-6">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-10">
        <ImageGallery />
        <ProductDetails />
      </div>
      <RelatedProducts />
    </main>
    </>
  );
}
