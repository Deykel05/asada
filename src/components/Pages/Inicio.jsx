import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import c from '../../imagenes/carrusel.jpg';
import Card from '../Services/Carta';
const Inicio = () => {
  return <Fragment>
    <Carousel fade >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c}
          alt="Second slide"

        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card></Card>
  </Fragment>
};

export default Inicio;
