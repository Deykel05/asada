import React from 'react';
import {FaFacebook,FaGoogle,FaWhatsapp} from 'react-icons/fa';
import '../../estilos/footer/styles.css'
const Footer = () => {
  return <footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaFacebook style={{fontSize: '25px'}}></FaFacebook></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaGoogle style={{fontSize: '25px'}}></FaGoogle></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaWhatsapp style={{fontSize: '25px',border:'none'}}></FaWhatsapp></a>
    </section>
  </div>

  <div className="text-center p-3 copy" >
      
    © 2021 Copyright:
    <span className="text-white" > ASADA Florida</span>
  </div>
</footer>;
};

export default Footer;
