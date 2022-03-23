import React, { useEffect } from 'react'
import moment from 'moment';
import { es } from 'moment/locale/es';
import { useForm } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { activeRequest } from '../../../../actions/requests';
export const DisponibilidadAdmin = React.forwardRef(({ request }, ref) => {

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
                        <h5 className='py-3 card-title'>Solicitud de Disponibilidad de Agua Potable</h5>
                        <h6 className='text-end'>Fecha: {moment(request.fecha).format("MMMM Do YYYY")}</h6>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Nombre del titular del inmueble</li>
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
                                <li className="list-group-item">N Telefono 1: <input type="text" className='form-control form-control-sm border-0' name='telefonoUnoPersona' value={formValues.telefonoUnoPersona} onChange={handleInputChange} /></li>
                                <li className="list-group-item">N Telefono 2: <input type="text" className='form-control form-control-sm border-0' name='telefonoDosPersona' value={formValues.telefonoDosPersona} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Localizacion de la propiedad</li>
                                <li className="list-group-item">Provincia: <input type="text" className='form-control form-control-sm border-0' name='provinciaLocalizacionPropiedad' value={formValues.provinciaLocalizacionPropiedad} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Canton: <input type="text" className='form-control form-control-sm border-0' name='cantonLocalizacionPropiedad' value={formValues.cantonLocalizacionPropiedad} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Distrito: <input type="text" className='form-control form-control-sm border-0' name='distritoLocalizacionPropiedad' value={formValues.distritoLocalizacionPropiedad} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Direccion exacta: <input type="text" className='form-control form-control-sm border-0' name='direccionExactaLocalizacionPropiedad' value={formValues.direccionExactaLocalizacionPropiedad} onChange={handleInputChange} /> </li>
                            </ul>

                        </div>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Servicio Requerido</li>
                                <li className="list-group-item">Servicio requerido: <input type="text" className='form-control form-control-sm border-0' name='servicioRequerido' value={formValues.servicioRequerido} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Servicio asociado(# paja):
                                    {request.numeroMedidor ?
                                        <input type="text" className='form-control form-control-sm border-0' name='numeroMedidor' value={formValues.numeroMedidor} onChange={handleInputChange} />
                                        :
                                        <input type="text" className='form-control form-control-sm border-0' name='numeroMedidor' value='No' onChange={handleInputChange} />
                                    }
                                </li>
                                <li className="list-group-item">Cantidad de unidades habitacionales: <input type="text" className='form-control form-control-sm border-0' name='cantidadUnidadesHabitacionales' value={formValues.cantidadUnidadesHabitacionales} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Datos de la propiedad</li>
                                <li className="list-group-item">Naturaleza del inmueble:<input type="text" className="form-control form-control-sm border-0" name='naturaleza' value={formValues.naturaleza} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Numero de Matricula o Finca:
                                    {request.tituloPropiedadDerecho ?
                                        <div className="input-group input-group-sm ">
                                            <input type="number" className="form-control" name='tituloPropiedadProvincia' value={formValues.tituloPropiedadProvincia} onChange={handleInputChange} />
                                            <span className="input-group-text">-</span>
                                            <input type="number" className="form-control" name='tituloPropiedadNumero' value={formValues.tituloPropiedadNumero} onChange={handleInputChange} />
                                            <span className="input-group-text">-</span>
                                            <input type="number" className="form-control" name='tituloPropiedadDerecho' value={formValues.tituloPropiedadDerecho} onChange={handleInputChange} />
                                        </div>
                                        :
                                        <input type="text" className='form-control form-control-sm border-0' name='tituloPropiedad' value={formValues.tituloPropiedad} onChange={handleInputChange} />
                                    }

                                </li>
                                <li className="list-group-item">Titular del inmueble:<input type="text" className='form-control form-control-sm  border-0' name='nombrePersona' value={formValues.titularInmueble} onChange={handleInputChange} /> </li>
                                <li className="list-group-item">Cuenta con plano?:
                                    <input type="text" className="form-control form-control-sm border-0" name='cuentaConPlano' value={request.cuentaConPlano} onChange={handleInputChange} />
                                </li>
                                {request.cuentaConPlano !== 'No' &&
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
                                }
                            </ul>

                        </div>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Medios para la notificacion</li>
                                <li className="list-group-item">N Telefono 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionTelefono1' value={formValues.mediosNotificacionTelefono1} onChange={handleInputChange} /></li>
                                <li className="list-group-item">Correo 1: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionCorreo1' value={formValues.mediosNotificacionCorreo1} onChange={handleInputChange} /> </li>

                                <li className="list-group-item">Direccion fisica exacta: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionDireccionExacta' value={formValues.mediosNotificacionDireccionExacta} onChange={handleInputChange} /> </li>
                            </ul>
                        </div>
                        <div className="col-md-4 my-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">La solicitud de constancia de disponibilidad</li>
                                <li className="list-group-item">Corresponde a: <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionDireccionExacta' value={formValues.correspondeA} onChange={handleInputChange} /> </li>
                                {request.correspondeTipoProyecto ?
                                    <li className="list-group-item">Tipo Proyecto:
                                        <input type="text" className='form-control form-control-sm border-0' name='mediosNotificacionDireccionExacta' value={request.correspondeTipoProyecto} onChange={handleInputChange} />
                                    </li>
                                    :
                                    <li className="list-group-item ">Cantidad de lotes:
                                        <input type="text" className='form-control form-control-sm border-0' name='razonSocialPersona' value={formValues.correspondeCantidadLotes} onChange={handleInputChange} />
                                    </li>
                                }

                            </ul>
                        </div>
                        <div className="col-md-12 my-2" >
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
                                    <li className="list-group-item">Foto plano inmueble:
                                        <img src={request.urlPlanoInmueble} style={{ objectFit: "contain", height: "50vh", width: "100%" }} alt='personeriaJuridca' />
                                    </li>
                                }

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
                    </div >
                </div >
            </div >
        </div >
    );
});