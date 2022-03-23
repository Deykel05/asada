import React from 'react';
import { Carousel } from 'react-bootstrap';
import tanque from '../../imagenes/TanqueAgua.jpeg';
import NacienteMacadamia from '../../imagenes/NacienteMacadamia.jpeg';
import oficina from '../../imagenes/oficina.jpeg';
import Card from '../servicios/Carta';
const Inicio = () => {
  return <>
    <Carousel className='carrusel' fade >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={oficina}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Oficina Administrativa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={tanque}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tanque de Agua</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={NacienteMacadamia}
          alt="Second slide"

        />

        <Carousel.Caption>
          <h3>Naciente Macadamia</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    <Card></Card>
  </>
};

export default Inicio;
