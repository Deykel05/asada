import React from 'react'
import { useState } from 'react';

const NombreTitularInmueble = () => {
    const [tipoPersona, setTipoPersona] = useState({
        tipo: "1"
    });
    const { tipo } = tipoPersona;
    const handleRadioChange = e => {
        if (e.target.value === '1') {
            setTipoPersona({
                tipo: e.target.value
            })
        }
        if (e.target.value === '2') {
            setTipoPersona({
                tipo: e.target.value
            })
        }
    }
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 bg-light card my-2 p-3">
                <h5 htmlFor="disabledSelect">Titular del Inmueble</h5>
                <hr />
                {tipo === '1' ?
                    <h6 className='mb-3'>Los Siguientes datos corresponden al dueño de la propiedad</h6>
                    : null}
                {tipo === '2' ?
                    <h6 className='mb-3'>Los Siguientes datos corresponden al representante legal</h6>
                    : null}
                <div className="radio">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleRadioChange} value='1' />
                                        <label className="form-check-label">
                                            Persona Fisica
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleRadioChange} value='2' />
                                        <label className="form-check-label" >
                                            Persona Juridica
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6 p-2">
                                    <input type="number" className="form-control" placeholder="Numero de Identificacion" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nombre" />
                                <span className="input-group-text"> </span>
                                <input type="text" className="form-control" placeholder="Primer Apellido" />
                                <span className="input-group-text"> </span>
                                <input type="text" className="form-control" placeholder="Segundo Apellido" />
                            </div>
                        </div>
                        <div className="col-6 mb-3">
                            {tipo === '1' ?
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} disabled></textarea>
                                    <label >Razon Social (Persona Juridica)</label>
                                </div>
                                :
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} ></textarea>
                                    <label >Razon Social</label>
                                </div>
                            }

                        </div>
                        <div className="col-6 mb-3">
                            <input type="number" className="form-control mb-3" placeholder="Numero de Telefono 1" />
                            <input type="number" className="form-control" placeholder="Numero de Telefono 2" />
                        </div>
                        <div className="col-6 py-5">
                            <p className='py-1'>En el siguiente espacio adjunte una foto de su cedula</p>
                            <input type="file" className="form-control mb-3" />
                        </div>
                        <div className="col-6 bg-white mb-3" style={{ height: "250px" }}>

                        </div>
                        {tipo === '2' ?
                            <div className="col-6 py-5">
                                <p className='py-1'>En el siguiente espacio adjunte una foto de la personeria juridica</p>
                                <input type="file" className="form-control mb-3" />
                            </div>
                            : null
                        }
                        {tipo === '2' ?

                            <div className="col-6 bg-white" style={{ height: "250px" }}>

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