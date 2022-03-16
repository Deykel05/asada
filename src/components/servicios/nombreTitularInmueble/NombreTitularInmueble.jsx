import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUploading } from '../../../actions/requests';

const NombreTitularInmueble = ({ handleInputChange, formValues, setValues }) => {

    const { datos } = useSelector(state => state.request);
    const dispatch = useDispatch();
    const { tipoPersona, razonSocialPersona, urlPersoneriaJuridica,urlCedulaPersona } = formValues;
    useEffect(() => {
        if (datos) {
            console.log(datos);
            setValues({ ...formValues, ...datos })
        }
    }, [datos]);

    if (tipoPersona === '1') {
        if (razonSocialPersona) {
            delete formValues.razonSocialPersona;
        }
        if (urlPersoneriaJuridica) {
            delete formValues.urlPersoneriaJuridica;
        }
    }
    const handleFile = (e) => {
        const file = e.target.files[0];
        dispatch(startUploading(file, e.target.name));
    }
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 bg-light card my-2 p-3">
                <h5 >Titular del Inmueble</h5>
                <hr />
                {tipoPersona && tipoPersona === '1' ?
                    <h6 className='mb-3'>Los Siguientes datos corresponden al dueño de la propiedad</h6>
                    : null}
                {tipoPersona && tipoPersona === '2' ?
                    <h6 className='mb-3'>Los Siguientes datos corresponden al representante legal</h6>
                    : null}
                <div className="body">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className='mx-2 my-3' onChange={handleInputChange}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="tipoPersona" id="flexRadioDefault1" value='1' required="required" />
                                            <label className="form-check-label">
                                                Persona Fisica
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="tipoPersona" id="flexRadioDefault2" value='2' />
                                            <label className="form-check-label" >
                                                Persona Juridica
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6 p-2">
                                    <div className='mx-2 my-3'>
                                        <input type="number" className="form-control form-control-sm" name='numeroIdentificacionPersona' placeholder="# Identificacion" onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className='mx-2 my-3'>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" className="form-control" name='nombrePersona' placeholder="Nombre" onChange={handleInputChange} required />
                                    <span className="input-group-text"> </span>
                                    <input type="text" className="form-control" name='primerApellidoPersona' placeholder="#1 Apellido" onChange={handleInputChange} required />
                                    <span className="input-group-text"> </span>
                                    <input type="text" className="form-control" name='segundoApellidoPersona' placeholder="#2 Apellido" onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            {tipoPersona && tipoPersona === '1' ?
                                <div className='mx-2 my-3'>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} value='' disabled></textarea>
                                        <label >Razon Social (Persona Juridica)</label>
                                    </div>
                                </div>
                                :
                                <div className='mx-2 my-3'>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" name='razonSocialPersona' id="floatingTextarea2" style={{ resize: "none", height: "100px" }} onChange={handleInputChange} required></textarea>
                                        <label >Razon Social</label>
                                    </div>
                                </div>
                            }

                        </div>
                        <div className="col-6 mb-3">
                            <div className='mx-2 my-3'>
                                <input type="number" className="form-control form-control-sm mb-3" placeholder="# Telefono 1" name='telefonoUnoPersona' onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="col-6 mb-3">
                            <div className='mx-2 my-3'>
                                <input type="number" className="form-control form-control-sm" placeholder="# Telefono 2" name='telefonoDosPersona' onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="col-6 py-5">
                            <div className='mx-2 my-3'>
                                <p className='py-1'>En el siguiente espacio adjunte una foto de su cedula</p>
                                <input type="file" name='urlCedulaPersona' className="form-control mb-3" onChange={handleFile} required />
                            </div>

                        </div>
                        <div className="col-6 mb-3" >
                            <div className='mx-2 my-3 bg-white' style={{ height: "250px" }}>
                                {urlCedulaPersona ?
                                    <img src={urlCedulaPersona} alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                                    : <p>No hay imagen por mostrar</p>
                                }
                            </div>

                        </div>
                        {tipoPersona && tipoPersona === '2' ?
                            <div className="col-6 py-5">
                                <div className='mx-2 my-3'>
                                    <p className='py-1'>En el siguiente espacio adjunte una foto de la personeria juridica</p>
                                    <input type="file" className="form-control mb-3" name='urlPersoneriaJuridica' onChange={handleFile} required />
                                </div>
                            </div>
                            : null
                        }
                        {tipoPersona && tipoPersona === '2' ?

                            <div className="col-6 mb-3" >
                                <div className='mx-2 my-3 bg-white' style={{ height: "250px" }}>
                                    <img src={urlPersoneriaJuridica} alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />

                                </div>

                            </div>
                            : null
                        }

                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default NombreTitularInmueble