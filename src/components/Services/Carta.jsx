import React from 'react';
import '../../estilos/cartas/styles.css';
import {FaHandHoldingWater,FaFaucet,FaEye,FaAngry} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
const Card = () => {
    return <section className='services'>
        <div className="container">

            <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                <Nav.Link as={Link} to="/disponibilidad" style={{textDecoration:'none',color:'black'}}>
                    <div className="icon-box icon-box-pink">
                        <div className="icon"><FaHandHoldingWater style={{fontSize: '35px'}}></FaHandHoldingWater></div>
                        <h4 className="title">Solicitud Disponibilidad</h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </Nav.Link>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box icon-box-cyan">
                        <div className="icon"><FaFaucet style={{fontSize: '35px'}}></FaFaucet></div>
                        <h4 className="title"><a href="">Solicitud Nueva Conexion</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-green">
                        <div className="icon"><FaEye style={{fontSize: '35px'}}></FaEye></div>
                        <h4 className="title"><a href="">Solicitud Inspeccion</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-blue">
                        <div className="icon"><FaAngry style={{fontSize: '35px'}}></FaAngry></div>
                        <h4 className="title"><a href="">Solicitud Quejas</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                </div>

            </div>

        </div>
    </section>;
};

export default Card;
