import { useState } from 'react';
import './ProductFeature.css';

const features = [
  {
    id: 1,
    title: 'Description',
    info: "Elevate your look with a touch of cosmic charm. Our Celestial Sparkle Earrings are designed to capture the breathtaking beauty of a starlit sky. Each earring features a delicate cluster of shimmering, high-quality cubic zirconia stones, meticulously set to mimic the radiant glow of distant stars.Crafted from premium, hypoallergenic sterling silver, these earrings offer both elegance and comfort. The lightweight design ensures they are perfect for all-day wear, whether you're heading to a special event or simply adding a hint of glamour to your everyday style.With their timeless design and brilliant sparkle, the Celestial Sparkle Earrings make a perfect gift for yourself or a loved one. They are versatile enough to complement any outfit, adding a sophisticated and enchanting touch to your jewelry collection.",
  },
  {
    id: 2,
    title: 'Key Features',
    info: 'Key Features of our Product',
  },
  {
    id: 3,
    title: 'Additional Info',
    info: 'Additional Information of our product.',
  },
  {
    id: 4,
    title: 'Reviews',
    info: 'Reviews of our product',
  },
];

export default function ProductFeature() {
  const [content, setContent] = useState(features[0].info);

  const displayContent = (title) => {
    const obj = features.find((item) => item.title === title);
    setContent(obj.info);
  };

  return (
    <div className='product-feature-container'>
      <div className='product-feature'>
        <div className='feature-btn-container'>
          {features.map((item) => (
            <button
              key={item.id}
              className='button'
              onClick={() => displayContent(item.title)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <p className='description'>{content}</p>
      </div>
    </div>
  );
}
