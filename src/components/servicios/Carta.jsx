import React from 'react';
import '../../estilos/cartas/styles.css';
import { FaHandHoldingWater, FaFaucet, FaEye, FaAngry } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Card = () => {
    return <section className='services'>
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
                    <Link as={Link} to="/disponibilidad" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-pink">
                            <div className="icon"><FaHandHoldingWater style={{ fontSize: '35px' }}></FaHandHoldingWater></div>
                            <h4 className="title">Solicitud Disponibilidad</h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate </p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <Link as={Link} to="/nuevaConexion" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-cyan">
                            <div className="icon"><FaFaucet style={{ fontSize: '35px' }}></FaFaucet></div>
                            <h4 className="title">Solicitud Nueva Conexion</h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <Link as={Link} to="/traspaso" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-cyan">
                            <div className="icon"><FaFaucet style={{ fontSize: '35px' }}></FaFaucet></div>
                            <h4 className="title">Solicitud Traspaso Paja</h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </Link>
                </div>
                <div className="w-100"></div>
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <Link as={Link} to="/inspeccion" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-green">
                            <div className="icon"><FaEye style={{ fontSize: '35px' }}></FaEye></div>
                            <h4 className="title">Solicitud Inspeccion</h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <Link as={Link} to="/queja" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-blue">
                            <div className="icon"><FaAngry style={{ fontSize: '35px' }}></FaAngry></div>
                            <h4 className="title">Sugerencias(Quejas)</h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    </section>;
};

export default Card;
