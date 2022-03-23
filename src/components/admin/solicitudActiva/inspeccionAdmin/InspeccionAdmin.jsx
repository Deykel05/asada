import React, { useEffect } from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';
import { useForm } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { activeRequest } from '../../../../actions/requests';
export const InspeccionAdmin = React.forwardRef(({ request }, ref) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset, setValues] = useForm({
        ...request
    });
    useEffect(() => {
        dispatch(activeRequest(formValues.id, { ...formValues }));
    }, [formValues, dispatch])
    // console.log(formValues);

    moment.locale(es);
    return (
        <div className='card-body pt-4' ref={ref}>
            <div className="row  mb-3">
                <div className="col-12 bg-light card my-2 p-3 ">
                    <div className="row  gx-2 gy-1 align-items-top">
                        <h5 className='py-3 card-title'>Solicitud de Disponibilidad de Inspeccion</h5>
                        <h6 className='text-end'>Fecha: {moment(request.fecha).format("MMMM Do YYYY")}</h6>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Nombre del titular del inmueble</li>
                                <li className="list-group-item">Nombre : <input type="text" className='form-control form-control-sm  border-0' name='nombrePersona' value={formValues.nombrePersona} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Primer apellido: <input type="text" className='form-control form-control-sm border-0' name='primerApellidoPersona' value={formValues.primerApellidoPersona} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Segundo apellido: <input type="text" className='form-control form-control-sm border-0' name='segundoApellidoPersona' value={formValues.segundoApellidoPersona} onChange={handleInputChange} /></li>

                                <li className="list-group-item">N de identificacion: <input type="text" className='form-control form-control-sm border-0' name='cedulaPersona' value={formValues.cedulaPersona} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>


                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Datos de la propiedad</li>
                                <li className="list-group-item">Del numero de paja: <input type="text" className='form-control form-control-sm border-0' name='numeroPaja' value={request.numeroPaja} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Por el siguiente motivo: <input type="text" className='form-control form-control-sm border-0' name='motivoInspeccion' value={request.motivoInspeccion} onChange={handleInputChange} /> </li>
                                {request.motivoInspeccionDetallado &&
                                    <li className="list-group-item">Motivo detallado: <input type="text" className='form-control form-control-sm border-0' name='motivoInspeccionDetallado' value={request.motivoInspeccionDetallado} onChange={handleInputChange} /> </li>
                                }
                            </ul>

                        </div>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Medios para la notificacion</li>
                                <li className="list-group-item">N Telefono 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionTelefono1' value={formValues.mediosNotificacionTelefono1} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Correo 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionCorreo1' value={formValues.mediosNotificacionCorreo1} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
});