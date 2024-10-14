import React, { useEffect, useState } from 'react';
import './Scroll.css';

function Scroll() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-wrapper">
      <div className="scroll-container">
        <div
          className="scroll-image first"
          style={{
            transform: `scale(${1 - scrollY * 0.0005})`,
            filter: `blur(${scrollY * 0.005}px)`,
            opacity: `${1 - scrollY * 0.001}`,
          }}
        >
          <img className='images' src="https://via.placeholder.com/600x400" alt="First Image" />
        </div>
        <div
          className="scroll-image second"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: `${scrollY * 0.0015}`,
          }}
        >
          <img className='images' src="https://via.placeholder.com/600x400" alt="Second Image" />
        </div>
        <div className="scroll-image third">
          <img className='images' src="https://via.placeholder.com/600x400" alt="Third Image" />
        </div>
      </div>
    </div>
  );
}

export default Scroll;
