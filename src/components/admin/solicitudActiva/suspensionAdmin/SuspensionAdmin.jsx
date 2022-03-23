import React, { useEffect } from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';
import { useForm } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { activeRequest } from '../../../../actions/requests';
export const SuspensionAdmin = React.forwardRef(({ request }, ref) => {
    moment.locale(es);

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset, setValues] = useForm({
        ...request
    });
    useEffect(() => {
        dispatch(activeRequest(formValues.id, { ...formValues }));
    }, [formValues, dispatch])
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
                                <li className="list-group-item">Nombre : <input type="text" className='form-control form-control-sm  border-0' name='nombrePersona' value={formValues.nombrePersona} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Primer apellido: <input type="text" className='form-control form-control-sm border-0' name='primerApellidoPersona' value={formValues.primerApellidoPersona} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Segundo apellido: <input type="text" className='form-control form-control-sm border-0' name='segundoApellidoPersona' value={formValues.segundoApellidoPersona} onChange={handleInputChange} /></li>

                                <li className="list-group-item">N de identificacion: <input type="text" className='form-control form-control-sm border-0' name='cedulaPersona' value={formValues.cedulaPersona} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">En calidad de:<input type="text" className='form-control form-control-sm  border-0' name='titularInmueble' value={formValues.titularInmueble} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                        <div className="col-md-4 page-break">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Solicitud</li>
                                <li className="list-group-item">Solicito formalmente a la ASADA Florida, la: <input type="text" className='form-control form-control-sm border-0' name='accionSuspension' value={request.accionSuspension} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Del numero de paja: <input type="text" className='form-control form-control-sm border-0' name='numeroPaja' value={request.numeroPaja} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Por el siguiente motivo: <input type="text" className='form-control form-control-sm border-0' name='motivoSuspensionDetallado' value={request.motivoSuspensionDetallado} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                        <div className="col-md-4 ">
                            <ul className="list-group">
                                <li className="list-group-item page-break active" aria-current="true">Medios para la notificacion</li>
                                <li className="list-group-item">N Telefono 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionTelefono1' value={formValues.mediosNotificacionTelefono1} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Correo 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionCorreo1' value={formValues.mediosNotificacionCorreo1} onChange={handleInputChange} /> </li>

                                <li className="list-group-item">Direccion fisica exacta: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionDireccionExacta' value={formValues.mediosNotificacionDireccionExacta} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                        <div className="col-md-12 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Firma del solicitante,representante legal o autorizado</li>
                                <li className="list-group-item">Nombre completo: <input type="text" className="form-control form-control-sm border-0" /></li>
                                <li className="list-group-item">#Cedula:<input type="text" className="form-control form-control-sm border-0" /></li>
                                <li className="list-group-item">Frima:<input type="text" className="form-control form-control-sm border-0" /></li>
                            </ul>
                        </div>
                        <div className="col-md-12 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Uso exclusivo de la ASADA</li>
                                <li className="list-group-item">Nombre completo: <input type="text" className="form-control form-control-sm border-0" /></li>
                                <li className="list-group-item">Firmadel funcionario ASADA:<input type="text" className="form-control form-control-sm border-0" /></li>
                                <li className="list-group-item">Fecha:<input type="text" className="form-control form-control-sm border-0" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
});