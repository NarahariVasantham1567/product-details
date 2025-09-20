import './Footer.css';

import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-media-container'>
        <img
          src='/images/navbar-logo.png'
          alt='footer-logo'
          className='footer-logo'
        />
        <p className='paragraph'>ACCS IN_TOUCH</p>
        <p className='paragraph-2'>One Stop for your Hair Accessories</p>
        <p className='paragraph-3'>Handmade With Love</p>
        <div className='media-links-container'>
          <ImFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaPinterestP className='icon' />
          <FiInstagram className='icon' />
        </div>
      </div>
      <div className='category-and-links-container'>
        <div className='category-container'>
          <h3 className='category-heading'>Categories</h3>
          <p>Claw Clips</p>
          <p>Earring</p>
          <p>Scrunchies</p>
          <p>Hair Bows</p>
        </div>
        <div className='category-container'>
          <h3 className='category-heading'>Quick Links</h3>
          <p>Claw Clips</p>
          <p>Earring</p>
          <p>Scrunchies</p>
          <p>Hair Bows</p>
        </div>
      </div>
    </div>
  );
}
