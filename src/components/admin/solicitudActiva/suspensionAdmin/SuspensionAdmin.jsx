import React from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';

export const SuspensionAdmin = React.forwardRef(({ request }, ref) => {
    moment.locale(es);

    return (
        <div className='card-body pt-4' ref={ref}>
            <div className="row  mb-3">
                <div className="col-12 bg-light card my-2 p-3 ">
                    <div className="row  gx-2 gy-1 align-items-top">
                        <h5 className='py-3 card-title'>Solicitud de Suspension</h5>
                        <h6 className='text-end'>Fecha: {moment(request.fecha).format("MMMM Do YYYY")}</h6>
                        <div className="col-md-4 ">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Nombre del titular del inmueble</li>
                                <li className="list-group-item">Nombre completo: <span className='fw-bold'> {request.nombrePersona} {request.primerApellidoPersona} {request.segundoApellidoPersona}</span></li>
                                <li className="list-group-item">N de identificacion: <span className='fw-bold'> {request.cedulaPersona}</span></li>
                                <li className="list-group-item">En calidad de: <span className='fw-bold'> {request.titularInmueble}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 page-break">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Solicitud</li>
                                <li className="list-group-item">Solicito formalmente a la ASADA Florida, la: <span className='fw-bold'> {request.accionSuspension}</span></li>
                                <li className="list-group-item">Del numero de paja: <span className='fw-bold'> {request.numeroPaja}</span></li>
                                <li className="list-group-item">Por el siguiente motivo: <span className='fw-bold'> {request.motivoSuspensionDetallado}</span></li>

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
                    </div>
                </div>
            </div>
        </div >
    );
});