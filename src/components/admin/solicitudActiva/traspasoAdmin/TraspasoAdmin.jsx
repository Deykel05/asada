import React, { useEffect } from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';
import { useForm } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { activeRequest } from '../../../../actions/requests';
export const TraspasoAdmin = React.forwardRef(({ request }, ref) => {
    moment.locale(es);
    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset, setValues] = useForm({
        ...request
    });
    useEffect(() => {
        dispatch(activeRequest(formValues.id, { ...formValues }));
    }, [formValues, dispatch])
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
                                    <li className="list-group-item">Nombre : <input type="text" className='form-control form-control-sm  border-0' name='nombrePersona' value={formValues.nombrePersona} onChange={handleInputChange} /></li>
                                    <li className="list-group-item">Primer apellido: <input type="text" className='form-control form-control-sm border-0' name='primerApellidoPersona' value={formValues.primerApellidoPersona} onChange={handleInputChange} /></li>
                                    <li className="list-group-item">Segundo apellido: <input type="text" className='form-control form-control-sm border-0' name='segundoApellidoPersona' value={formValues.segundoApellidoPersona} onChange={handleInputChange} /></li>

                                    <li className="list-group-item">N de identificacion: <input type="text" className='form-control form-control-sm border-0' name='cedulaPersona' value={formValues.cedulaPersona} onChange={handleInputChange} /> </li>
                                    <li className="list-group-item">En calidad de:<input type="text" className='form-control form-control-sm  border-0' name='titularInmueble' value={formValues.titularInmueble} onChange={handleInputChange} /> </li>
                                </ul>
                            </div>
                            <div className="col-md-4 page-break">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Datos de la propiedad</li>
                                    <li className="list-group-item">Consta de: <input type="text" className='form-control form-control-sm  border-0' name='inmuebleConstaDe' value={request.inmuebleConstaDe} onChange={handleInputChange} /> </li>
                                    {request.inmuebleConstaDe === 'Certificacion Literal' ?
                                        <li className="list-group-item">Certificacion literal:
                                            <div className="input-group input-group-sm ">
                                                <input type="number" className="form-control" name='planoCatastroProvincia' value={request.certificacionProvincia} onChange={handleInputChange} />
                                                <span className="input-group-text">-</span>
                                                <input type="number" className="form-control" name='planoCatastroNumero' value={request.certificacionNumero} onChange={handleInputChange} />
                                                <span className="input-group-text">-</span>
                                                <input type="number" className="form-control" name='planoCatastroAño' value={request.certificacionDerecho} onChange={handleInputChange} />
                                            </div>
                                        </li>
                                        :
                                        <li className="list-group-item">Declaracion Jurada:
                                            <input type="text" className='form-control form-control-sm  border-0' name='declaracionJurada' value={request.declaracionJurada} onChange={handleInputChange} />
                                        </li>
                                    }
                                    <li className="list-group-item">Plano:
                                        {request.planoCatastroProvincia ?
                                            <div className="input-group input-group-sm ">
                                                <input type="number" className="form-control" name='planoCatastroProvincia' value={formValues.planoCatastroProvincia} onChange={handleInputChange} />
                                                <span className="input-group-text">-</span>
                                                <input type="number" className="form-control" name='planoCatastroNumero' value={formValues.planoCatastroNumero} onChange={handleInputChange} />
                                                <span className="input-group-text">-</span>
                                                <input type="number" className="form-control" name='planoCatastroAño' value={formValues.planoCatastroAño} onChange={handleInputChange} />
                                            </div>
                                            :
                                            <input type="text" className='form-control form-control-sm border-0' name='planoAgrimesura' value={formValues.planoAgrimesura} onChange={handleInputChange} />
                                        }
                                    </li>
                                    <li className="list-group-item">Del numero de paja: <input type="text" className='form-control form-control-sm border-0' name='numeroPaja' value={request.numeroPaja} onChange={handleInputChange} /> </li>
                                </ul>

                            </div>
                            <div className="col-md-4 ">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Nuevo Suscrito</li>
                                    <li className="list-group-item">Tipo :
                                        {request.tipoPersona && request.tipoPersona === '1' ?
                                            <input type="text" className='form-control form-control-sm  border-0' name='tipoPersona' value='Persona Fisica' onChange={handleInputChange} />
                                            :
                                            <input type="text" className='form-control form-control-sm  border-0' name='tipoPersona' value='Persona Juridica' onChange={handleInputChange} />
                                        }
                                    </li>
                                    <li className="list-group-item">Nombre : <input type="text" className='form-control form-control-sm  border-0' name='nombrePersona' value={formValues.nombrePersona} onChange={handleInputChange} /></li>
                                    <li className="list-group-item">Primer apellido: <input type="text" className='form-control form-control-sm border-0' name='primerApellidoPersona' value={formValues.primerApellidoPersona} onChange={handleInputChange} /></li>
                                    <li className="list-group-item">Segundo apellido: <input type="text" className='form-control form-control-sm border-0' name='segundoApellidoPersona' value={formValues.segundoApellidoPersona} onChange={handleInputChange} /></li>

                                    <li className="list-group-item">N de identificacion: <input type="text" className='form-control form-control-sm border-0' name='cedulaPersona' value={formValues.cedulaPersona} onChange={handleInputChange} /> </li>
                                    {request.razonSocialPersona &&
                                        <li className="list-group-item">Razon social: <input type="text" className='form-control form-control-sm border-0' name='razonSocialPersona' value={formValues.razonSocialPersona} onChange={handleInputChange} /></li>
                                    }
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Medios para la notificacion</li>
                                    <li className="list-group-item">N Telefono 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionTelefono1' value={formValues.mediosNotificacionTelefono1} onChange={handleInputChange} /></li>
                                    <li className="list-group-item">Correo 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionCorreo1' value={formValues.mediosNotificacionCorreo1} onChange={handleInputChange} /> </li>
                                    <li className="list-group-item">Direccion fisica exacta: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionDireccionExacta' value={formValues.mediosNotificacionDireccionExacta} onChange={handleInputChange} /> </li>
                                </ul>
                            </div>
                            <div className="col-md-12" >
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Imagenes</li>
                                    {request.urlCedulaPersona &&
                                        <li className="list-group-item">Foto cedula:
                                            <img src={request.urlCedulaPersona} style={{ objectFit: "contain", height: "50vh", width: "100%" }} alt='cedulaPersona' />
                                        </li>
                                    }
                                    {request.urlPersoneriaJuridica &&
                                        <li className="list-group-item">Foto personeria juridica:
                                            <img src={request.urlPersoneriaJuridica} style={{ objectFit: "contain", height: "50vh", width: "100%" }} alt='personeriaJuridca' />
                                        </li>
                                    }
                                    {request.urlPlanoInmueble &&
                                        <li className="list-group-item">Foto personeria Plano:
                                            <img src={request.urlPlanoInmueble} style={{ objectFit: "contain", height: "50vh", width: "100%" }} alt='plano' />
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