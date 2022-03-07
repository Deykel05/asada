import React from 'react';
import { FaFacebook, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import '../../estilos/footer/styles.css'
const Footer = () => {
  return (
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2022. Todos los Derechos Reservados.
      </div>
      <div>
        <a href="#!" className="text-white me-4">
          <FaFacebook style={{ fontSize: '20px' }} />
        </a>
        {/* <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
        </a> */}
        <a href="#!" className="text-white me-4">
          <FaGoogle style={{ fontSize: '20px' }} />
        </a>
        <a href="#!" className="text-white">
          <FaWhatsapp style={{ fontSize: '20px' }} />
        </a>
      </div>
    </div>
  )
};

export default Footer;
