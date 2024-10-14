import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://mindmarketing.lat/wp-content/uploads/2024/10/4d69a49b8fca3b9b9cd7c1be01d3abd5.webp"
            alt="Logo"
          />
          <span>20 AÑOS</span>
        </div>

        <div className="links">
          <a href="https://www.linkedin.com/">
            <FaLinkedin size={24} color="#7F8280" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={24} color="#7F8280" />
          </a>
        </div>

        <div className="menu">
          <div>Menú</div>
          <GiHamburgerMenu size={30} color="#F4F5F5" />
        </div>
      </div>
    </header>
  );
}

export default Header;
