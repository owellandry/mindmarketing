import React from 'react';
import './Herocomponents.css';
import { IoIosArrowDown } from "react-icons/io";

function Herocomponents() {
  return (
    <div className="hero-container">
      {/* Logo en el centro */}
      <img
        className="hero-logo"
        src="https://mindmarketing.lat/wp-content/uploads/2024/10/4d69a49b8fca3b9b9cd7c1be01d3abd5.webp"
        alt="MindMarketing Logo"
      />

      {/* Nombre de la empresa debajo del logo */}
      <h1 className="hero-title">MindMarketing</h1>

      <span className="span_headrer">
        AYUDAMOS A LAS MARCAS A TOMAR DECISIONES ESTRATÉGICAS A TRAVÉS DE ANÁLISIS DETALLADOS Y CONOCIMIENTO PROFUNDO DEL MERCADO Y DEL COMPORTAMIENTO DEL CONSUMIDOR.
      </span>

      <div className="btton_content_information">
        <span className="button_information">
          PIDE INFORMACIÓN
        </span>
      </div>
      <div className="content_arrow">
        <span>Deslizar para ver más</span>
        <IoIosArrowDown size={24} />
      </div>
    </div>
  );
}

export default Herocomponents;
