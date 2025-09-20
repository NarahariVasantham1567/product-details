import './ProductDetails.css';

import { FiChevronRight } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import { useState } from 'react';

const data = [
  {
    id: 1,
    image: '/images/free-delivery.png',
    title: 'Free Delivery',
  },
  {
    id: 2,
    image: '/images/cash-on-delivery.png',
    title: 'COD',
  },
  {
    id: 3,
    image: '/images/return-img.png',
    title: '10 Day Return',
  },
  {
    id: 4,
    image: '/images/premium.png',
    title: 'Premium Quality',
  },
];

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(4);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className='product-details-container'>
      <div className='brudcrum-container'>
        <p className='brudcrums'>Home</p>
        <FiChevronRight className='right-icon' />
        <p className='brudcrums'>Product</p>
        <FiChevronRight className='right-icon' />
        <p className='brudcrums'>Product detail</p>
      </div>
      <div className='grid-container'>
        <div className='image-container'>
          <img src='/images/image1.png' alt='image' className='image-1' />
          <div className='image-grid'>
            <img src='/images/image2.png' alt='image2' className='image-2' />
            <img src='/images/image2.png' alt='image2' className='image-2' />
            <img src='/images/image2.png' alt='image2' className='image-2' />
          </div>
        </div>
        <div className='product-detail-container'>
          <div className='product-details'>
            <h2 className='heading'>
              YouBella Jewellery Bohemian Multi-Color Earrings for Girls and
              Women
            </h2>
            <div className='rating-container'>
              <p className='rating'>4.2</p>
              <div>
                <FaRegStar className='star' />
                <FaRegStar className='star' />
                <FaRegStar className='star' />
                <FaRegStar className='star' />
                <FaRegStar className='star' />
              </div>
              <p className='reviews'>245</p>
            </div>
            <div className='price-container'>
              <div className='pricing'>
                <MdCurrencyRupee className='rupee-icon' />
                <p className='price'>1,500</p>
              </div>
              <div className='main-pricing'>
                <MdCurrencyRupee className='main-icon' />
                <p className='main-price'>5,500</p>
              </div>
              <p className='offer-percent'>70%OFF</p>
            </div>
            <div className='quantity-container'>
              <p>Quantity</p>
              <div className='quantity-btn-container'>
                <button className='btn' onClick={incrementQuantity}>
                  +
                </button>
                <p>{quantity}</p>
                <button className='btn' onClick={decrementQuantity}>
                  -
                </button>
              </div>
            </div>
            <div className='btn-container'>
              <button className='explore-btn'>Explore Product</button>
              <button className='cart-btn'>
                Add to Cart <BsBag />
              </button>
            </div>
          </div>
          <div className='delivery-details-container'>
            {data.map((item) => {
              return (
                <div key={item.id} className='delivery-item-container'>
                  <img className='img' src={item.image} alt={item.title} />
                  <p className='title'>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
