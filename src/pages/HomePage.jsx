import ProductDetails from '../components/ProductDetails/ProductDetails';
import ProductFeature from '../components/ProductFeatures/ProductFeature';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';

export default function HomePage() {
  return (
    <>
      <ProductDetails />
      <ProductFeature />
      <SimilarProducts />
    </>
  );
}
