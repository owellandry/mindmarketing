import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Íconos de redes sociales
import { GiHamburgerMenu } from 'react-icons/gi'; // Ícono de menú hamburguesa
import './Header.css'; // Archivo de estilos para el navbar

function Header() {
  return (
    <header>
      <div className="navbar">
        {/* Logo con 20 años */}
        <div className="logo">
          <img 
            src="https://mindmarketing.lat/wp-content/uploads/2024/10/4d69a49b8fca3b9b9cd7c1be01d3abd5.webp" 
            alt="Logo" 
          />
          <div>20 AÑOS</div>
        </div>

        {/* Enlaces de redes sociales */}
        <div className="links">
          <a href="#">
            <FaLinkedin size={24} color="#7F8280" />
          </a>
          <a href="#">
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
