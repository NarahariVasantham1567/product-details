import './SimilarProducts.css';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import ProductCard from '../ProductCard/ProductCard';

const products = [
  { id: 1, img: '/images/product-img1.png', title: 'Organza Bow', price: 15 },
  {
    id: 2,
    img: '/images/product-img2.png',
    title: 'Velvet  Bow',
    price: 15,
  },
  {
    id: 3,
    img: '/images/product-img3.png',
    title: 'Velvet  Bow',
    price: 15,
  },
  {
    id: 4,
    img: '/images/product-img4.png',
    title: 'Velvet  Bow',
    price: 15,
  },
];

export default function SimilarProducts() {
  return (
    <div className='similar-products-container'>
      <div className='container'>
        <h1 className='main-heading'>SIMILAR PRODUCT</h1>
        <div className='button-container'>
          <button className='arrow-btn'>
            <FaChevronLeft />
          </button>
          <button className='arrow-btn'>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className='products'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
