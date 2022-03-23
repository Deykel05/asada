import React from 'react';
import '../../estilos/cartas/styles.css';
import { FaHandHoldingWater, FaFaucet, FaEye, FaAngry, FaExclamationTriangle } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Card = () => {
    return <section className='services'>
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" >
                    <Link as={Link} to="/disponibilidad" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-pink">
                            <div className="icon"><FaHandHoldingWater style={{ fontSize: '35px' }}></FaHandHoldingWater></div>
                            <h4 className="title">Solicitud Disponibilidad</h4>
                            <p className="description">Para trámite de visado de plano, permiso de construcción, entre otros. Da una garantía de que la propiedad tiene la posibilidad de ser abastecida con el servicio de agua.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" >
                    <Link as={Link} to="/nuevaConexion" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-cyan">
                            <div className="icon"><FaFaucet style={{ fontSize: '35px' }}></FaFaucet></div>
                            <h4 className="title">Solicitud Prevista Nueva</h4>
                            <p className="description pb-4">Una vez obtenida la disponibilidad positiva,  puede solicitar la conexión nueva, previa  presentación de requisitos y cancelación del derecho de conexión.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" >
                    <Link as={Link} to="/traspaso" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-purple">
                            <div className="icon"><BiTransfer style={{ fontSize: '35px' }}></BiTransfer></div>
                            <h4 className="title">Solicitud Traspaso Paja</h4>
                            <p className="description pb-4">Cuando la propiedad es vendida, o el dueño fallece, el nuevo dueño debe apersonarse a solicitar el traspaso de la paja. </p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" >
                    <Link as={Link} to="/suspension" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-yellow">
                            <div className="icon"><FaExclamationTriangle style={{ fontSize: '35px' }}></FaExclamationTriangle></div>
                            <h4 className="title">Solicitud Suspension Servicio</h4>
                            <p className="description pb-4">En caso de no requerir el servicio, una vez cancelado los montos de recibos pendientes y la tarifa de desconexión, puede solicitar la suspensión.</p>
                        </div>
                    </Link>
                </div>
                {/* <div className="w-100"></div> */}
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200" >
                    <Link as={Link} to="/inspeccion" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-green">
                            <div className="icon"><FaEye style={{ fontSize: '35px' }}></FaEye></div>
                            <h4 className="title">Solicitud Inspeccion</h4>
                            <p className="description ">En caso de detectar altos consumos, puede solicitar una inspección para verificar la existencia de fugas internas, o en el medidor, o descartar errores de lectura y facturación.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200" >
                    <Link as={Link} to="/queja" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="icon-box icon-box-blue">
                            <div className="icon"><FaAngry style={{ fontSize: '35px' }}></FaAngry></div>
                            <h4 className="title">Sugerencias(Quejas)</h4>
                            <p className="description pb-4">En caso de tener alguna recomendación, consulta, duda o queja, puede hacerlo formalmente para tener una respuesta oportuna.</p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    </section>;
};

export default Card;
