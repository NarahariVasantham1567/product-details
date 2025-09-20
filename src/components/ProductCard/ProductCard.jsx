import './ProductCard.css';

import { MdFavoriteBorder } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import { LuIndianRupee } from 'react-icons/lu';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartSlice';

export default function ProductCard({ product }) {
  const [showBuyNowBtn, setShowBuyNowBtn] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div
      className='product-card-container'
      onClick={() => setShowBuyNowBtn(!showBuyNowBtn)}
    >
      <MdFavoriteBorder className='favorites-icon' />
      <img src={product.img} alt={product.title} className='product-image' />
      <div className='title-cart-container'>
        <p>{product.title}</p>
        <BsBag />
      </div>
      <hr className='line' />
      <div className='price-container'>
        <div className='color-container'>
          <div className='red'></div>
          <div className='blue'></div>
          <div className='green'></div>
        </div>
        <p>
          <LuIndianRupee /> {product.price}
        </p>
      </div>
      {showBuyNowBtn && (
        <div className='buy-now-container'>
          <button className='bag-btn'>
            <BsBag className='bag-icon' />
          </button>
          <button className='buy-btn' onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
