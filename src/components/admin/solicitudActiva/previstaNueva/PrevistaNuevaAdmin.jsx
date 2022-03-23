import React from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';

export const PrevistaNuevaAdmin = React.forwardRef(({ request }, ref) => {
    moment.locale(es);

    return (
        <div className='card-body pt-4' ref={ref}>
            <div className="row  mb-3">
                <div className="col-12 bg-light card my-2 p-3 ">
                    <div className="row  gx-2 gy-1 align-items-top">
                        <h5 className='py-3 card-title'>Solicitud de Prevista Nueva</h5>
                        <h6 className='text-end'>Fecha: {moment(request.fecha).format("MMMM Do YYYY")}</h6>
                        <div className="col-md-4 ">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Nombre del titular del inmueble</li>
                                <li className="list-group-item">Tipo :
                                    {request.tipoPersona && request.tipoPersona === '1' ?
                                        <span className='fw-bold'>Persona Fisica</span>
                                        :
                                        <span className='fw-bold'>Persona Juridica</span>
                                    }
                                </li>
                                <li className="list-group-item">Nombre completo: <span className='fw-bold'> {request.nombrePersona}</span></li>
                                <li className="list-group-item">N de identificacion: <span className='fw-bold'> {request.cedulaPersona}</span></li>
                                {request.razonSocialPersona &&
                                    <li className="list-group-item">Razon social: <span className='fw-bold'> {request.razonSocialPersona}</span></li>
                                }
                                <li className="list-group-item">N Telefono 1: <span className='fw-bold'> {request.telefonoUnoPersona}</span></li>
                                <li className="list-group-item">N Telefono 2: <span className='fw-bold'> {request.telefonoDosPersona}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Localizacion de la propiedad</li>
                                <li className="list-group-item">Provincia: <span className='fw-bold'> {request.provinciaLocalizacionPropiedad}</span></li>
                                <li className="list-group-item">Canton: <span className='fw-bold'> {request.cantonLocalizacionPropiedad}</span></li>
                                <li className="list-group-item">Distrito: <span className='fw-bold'> {request.distritoLocalizacionPropiedad}</span></li>
                                <li className="list-group-item">Direccion exacta: <span className='fw-bold'> {request.direccionExactaLocalizacionPropiedad}</span></li>
                            </ul>

                        </div>
                        <div className="col-md-4 ">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Servicio Requerido</li>
                                <li className="list-group-item">Servicio requerido: <span className='fw-bold'>Agua Potable</span></li>
                                <li className="list-group-item">Tipo de solicitud: <span className='fw-bold'>{request.tipoSolicitud}</span></li>
                                <li className="list-group-item">Cantidad: <span className='fw-bold'> {request.cantidadTipoSolicitud}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 page-break">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Datos de la propiedad</li>
                                <li className="list-group-item">Naturaleza del inmueble: <span className='fw-bold'> {request.naturaleza}</span></li>
                                <li className="list-group-item">Numero de Matricula o Finca:
                                    {request.tituloPropiedadDerecho ?
                                        <span className="fw-bold" > {request.tituloPropiedadProvincia}-{request.tituloPropiedadNumero}-{request.tituloPropiedadDerecho}</span>
                                        :
                                        <span className="fw-bold" > {request.tituloPropiedad}</span>
                                    }

                                </li>
                                <li className="list-group-item">Titular del inmueble: <span className='fw-bold'> {request.titularInmueble}</span></li>
                                <li className="list-group-item">Cuenta con plano?:

                                    <span className='fw-bold'> {request.cuentaConPlano}</span>


                                </li>
                                {request.cuentaConPlano !== 'No' &&
                                    <li className="list-group-item">Plano:
                                        {request.planoCatastroProvincia ?
                                            <span className='fw-bold'> {request.planoCatastroProvincia}-{request.planoCatastroNumero}-{request.planoCatastroAño}</span>
                                            :
                                            <span className='fw-bold'> {request.planoAgrimesura}</span>
                                        }
                                    </li>
                                }
                            </ul>

                        </div>
                        <div className="col-md-4 ">
                            <ul className="list-group">
                                <li className="list-group-item page-break active" aria-current="true">Medios para la notificacion</li>
                                <li className="list-group-item">N Telefono 1: <span className='fw-bold'> {request.mediosNotificacionTelefono1}</span></li>
                                <li className="list-group-item">Correo 1: <span className='fw-bold'> {request.mediosNotificacionCorreo1}</span></li>
                                
                                <li className="list-group-item">Direccion fisica exacta: <span className='fw-bold'> {request.mediosNotificacionDireccionExacta}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Forma para cancelar la tarifa de derecho de conexion</li>
                                <li className="list-group-item">Forma:
                                    {request.formaPago === '1' &&
                                        <span className='fw-bold'> En efectivo en un solo tracto, previo a la conexion del servicio</span>
                                    }
                                    {request.formaPago === '2' &&
                                        <span className='fw-bold'> Incluir el monto por tarifa de dececho de conexion en la primer facturacion</span>
                                    }
                                    {request.formaPago === '3' &&
                                        <span className='fw-bold'> Arreglo de pago</span>
                                    }
                                </li>
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
    );
});