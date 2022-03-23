import React from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';
export const TraspasoAdmin = React.forwardRef(({ request }, ref) => {
    moment.locale(es);

    return (
        <>
            <div className='card-body pt-4' ref={ref}>
                <div className="row  mb-3">
                    <div className="col-12 bg-light card my-2 p-3 ">
                        <div className="row  gx-2 gy-1 align-items-top">
                            <h5 className='py-3 card-title'>Solicitud de Traspaso Paja</h5>
                            <h6 className='text-end'>Fecha: {moment(request.fecha).format("MMMM Do YYYY")}</h6>
                            <div className="col-md-4 ">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Titular del Inmueble</li>
                                    <li className="list-group-item">Nombre completo: <span className='fw-bold'> {request.nombrePersona} {request.primerApellidoPersona} {request.segundoApellidoPersona}</span></li>
                                    <li className="list-group-item">N de identificacion: <span className='fw-bold'> {request.cedulaPersona}</span></li>
                                    <li className="list-group-item">En calidad de: <span className='fw-bold'> {request.titularInmueble}</span></li>
                                </ul>
                            </div>
                            <div className="col-md-4 page-break">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Datos de la propiedad</li>
                                    <li className="list-group-item">Consta de: <span className='fw-bold'> {request.inmuebleConstaDe}</span></li>
                                    {request.inmuebleConstaDe === 'Certificacion Literal' ?
                                        <li className="list-group-item">Certificacion literal:
                                            <span className="fw-bold" > {request.certificacionProvincia}-{request.certificacionNumero}-{request.certificacionDerecho}</span>
                                        </li>
                                        :
                                        <li className="list-group-item">Declaracion Jurada:
                                            <span className="fw-bold" > {request.declaracionJurada}</span>
                                        </li>
                                    }
                                    <li className="list-group-item">Plano:
                                        {request.planoCatastroProvincia ?
                                            <span className='fw-bold'> {request.planoCatastroProvincia}-{request.planoCatastroNumero}-{request.planoCatastroDerecho}</span>
                                            :
                                            <span className='fw-bold'> {request.planoAgrimesura}</span>
                                        }
                                    </li>
                                    <li className="list-group-item">Del numero de paja: <span className='fw-bold'> {request.numeroPaja}</span></li>
                                </ul>

                            </div>
                            <div className="col-md-4 ">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Nuevo Suscrito</li>
                                    <li className="list-group-item">Tipo :
                                        {request.tipoPersona && request.tipoPersona === '1' ?
                                            <span className='fw-bold'>Persona Fisica</span>
                                            :
                                            <span className='fw-bold'>Persona Juridica</span>
                                        }
                                    </li>
                                    <li className="list-group-item">Nombre completo: <span className='fw-bold'> {request.nombreNuevoSuscrito} {request.primerApellidoNuevoSuscrito} {request.segundoApellidoNuevoSuscrito}</span></li>
                                    <li className="list-group-item">N de identificacion: <span className='fw-bold'> {request.cedulaNuevoSuscrito}</span></li>
                                    {request.razonSocialPersona &&
                                        <li className="list-group-item">Razon social: <span className='fw-bold'> {request.razonSocialPersona}</span></li>
                                    }
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Medios para la notificacion</li>
                                    <li className="list-group-item">N Telefono 1: <span className='fw-bold'> {request.mediosNotificacionTelefono1}</span></li>
                                    <li className="list-group-item">Correo 1: <span className='fw-bold'> {request.mediosNotificacionCorreo1}</span></li>
                                    <li className="list-group-item">Direccion fisica exacta: <span className='fw-bold'> {request.mediosNotificacionDireccionExacta}</span></li>
                                </ul>
                            </div>

                            <div className="col-md-12" >
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Imagenes</li>
                                    <li className="list-group-item">Foto cedula:
                                        {request.urlCedulaPersona ?
                                            <img src={request.urlCedulaPersona} style={{ objectFit: "contain", height: "50vh", width: "100%" }} alt='cedulaPersona' />
                                            :
                                            <span className='fw-bold'>No hay foto</span>
                                        }
                                    </li>
                                    {request.urlPersoneriaJuridica &&
                                        <li className="list-group-item">Foto personeria juridica:
                                            <img src={request.urlPersoneriaJuridica} style={{ objectFit: "contain", height: "50vh", width: "100%" }} alt='personeriaJuridca' />
                                        </li>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
});