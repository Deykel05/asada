import React from 'react';
import { Carousel } from 'react-bootstrap';
import tanque from '../../imagenes/TanqueAgua.jpeg';
import NacienteMacadamia from '../../imagenes/NacienteMacadamia.jpeg';
import Card from '../servicios/Carta';
const Inicio = () => {
  return <>
    <Carousel className='carrusel' fade >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={tanque}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tanque</h3>
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
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={NacienteMacadamia}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card></Card>
  </>
};

export default Inicio;
