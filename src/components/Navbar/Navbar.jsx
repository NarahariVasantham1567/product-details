import { Link } from 'react-router-dom';
import './Navbar.css';

import { IoSearch } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cart = useSelector((store) => store.cart);

  return (
    <div className='navbar-container'>
      <img
        src='images/navbar-logo.png'
        alt='navbar-logo'
        className='navbar-logo'
      />
      <ul className='links-container'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
      <div className='search-media-container'>
        <div className='input-container'>
          <input type='text' placeholder='Search' className='input-search' />
          <IoSearch className='search-icon' />
        </div>
        <div className='icon-container'>
          <MdFavoriteBorder className='favorite-icon' />
          <BsBag className='bag-icon' />
          <p className='cart-items'>{cart.length}</p>
        </div>
        <div className='profile-container'></div>
      </div>
    </div>
  );
}
